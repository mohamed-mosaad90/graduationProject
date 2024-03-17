import * as React from 'react';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({});
    const [user, setUser] = useState([])

    useEffect(() => {
        const axiosFunction = async () => {
            try {

                const axiosRes = await axios.get('http://localhost:3000/posts');
                const data = axiosRes.data
                console.log(data); // Accessing data from the response
                setUser(data); // Setting posts state with response data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        axiosFunction();
    }, []);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Stack
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            style={{ backgroundColor: "#f0f2f5", height: "100%", position: "relative" }}
            role="presentation"

            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Stack sx={{ top: "0px", height: "100px", display: "flex", justifyContent: "flex-start", paddingBottom: "10px", alignItems: "flex-end", flexDirection: "row", position: "absolute", backgroundColor: "green", width: "100%", color: "#fff" }}>
                <ArrowBackIcon style={{ marginInline: "30px", cursor: "pointer" }} onClick={toggleDrawer(anchor, false)} />
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "500", letterSpacing: "0.5px" }}>
                    Profile
                </Typography>
            </Stack>
            {user.map((d) => (
                <Stack key={d.id}>

                    <Avatar
                        alt="Remy Sharp"
                        // dynamic
                        src={d.img}
                        sx={{ width: 220, height: 220, position: "absolute", top: "150px", left: "50px" }}
                    />
                    <Stack padding={"10px 0px 0px 30px"} sx={{
                        backgroundColor: "#fff", height: "100px ", width: " 91.5%"
                        , position: "absolute", top: "400px"
                    }}>
                        <Typography >
                            <Typography  color={"gray"} fontSize={"18px"}>
                                Your name
                            </Typography>
                            <Typography marginTop={"15px"}>
                                {/* dynamic */}
                                {d.title}
                            </Typography>
                        </Typography>

                    </Stack>
                    <Stack sx={{ height: "100px ", width: "100%", position: "absolute", top: "500px" }}>
                        <Typography padding={"20px 20px 20px 25px"}>
                            <Typography color={"gray"} fontSize={"16px"} >
                                This is not username or pin . this name will be visible to your WhatsApp contacts.                    </Typography>

                        </Typography>

                    </Stack>
                    <Stack padding={"10px 0px 0px 30px"} sx={{ backgroundColor: "#fff", height: "100px ", width: " 91.5%", position: "absolute", top: "600px" }}>
                        <Typography >
                            <Typography color={"gray"} fontSize={"18px"}>

                                About
                            </Typography>
                            <Typography marginTop={"15px"}>
                                {/* dynamic */}
                                {d.body}
                            </Typography>
                        </Typography>



                    </Stack>

                </Stack>

            ))}


        </Stack>
    );


    return (


        <div>
            {user.map((d) => (
                <React.Fragment key={d.id}>
                    <Button onClick={toggleDrawer("left", true)}>            <Avatar
                        alt="Remy Sharp"
                        // dynamic
                        src={d.img}

                        sx={{ width: 50, height: 50, position: "absolute", top: "50px", left: "20px" }}
                    /></Button>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
