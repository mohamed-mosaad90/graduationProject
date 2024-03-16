import { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {

    const [value, setValue] = useState("");
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const axiosFunction = async () => {
            try {

                const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const data = axiosRes.data
                console.log(data); // Accessing data from the response
                setPosts(data); // Setting posts state with response data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        axiosFunction();
    }, []);

    return (
        <>
            <input onChange={e => setValue(e.target.value)} />
            {
                posts && posts.filter(post => {
                    if (post.title.toLowerCase().includes(value.toLowerCase())) {
                        return post
                    }
                }).map((p) => (
                    <div className="box" key={p.id}>
                        <p>{p.title}</p>

                    </div>
                ))
            }

        </>
    );









    
}

export default Search;
