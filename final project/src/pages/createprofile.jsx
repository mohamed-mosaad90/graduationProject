import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from "@mui/material";
import personIcon from "../assets/person-icon-svg-2.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

function CreateProfile() {
    const [photo, setPhoto] = useState(personIcon);
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [loading, setLoading] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const isValidate = () => {
        let result = true;
        if (name === "" || name === null) {
            result = false;
            toast.warning("Please enter a Full Name");
        }
        if (age === "" || age === null) {
            result = false;
            toast.warning("Please enter an Age");
        }
        if (phoneNumber === "" || phoneNumber === null) {
            result = false;
            toast.warning("Please enter a Phone Number");
        }
        if (location === "" || location === null) {
            result = false;
            toast.warning("Please enter a Location");
        }
        if (gender === "" || gender === null) {
            result = false;
            toast.warning("Please enter a Gender");
        }
        if (birthDay === "" || birthDay === null) {
            result = false;
            toast.warning("Please enter a birthDay");
        }
        return result;
    };

    const setData = async (e) => {
        e.preventDefault();
        if (loading) return;
        if (!isValidate()) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("age", age);
        formData.append("photo", photo);
        formData.append("phoneNumber", phoneNumber);
        formData.append("birthDay", birthDay);
        formData.append("gender", gender);

        const token = window.localStorage.getItem("token");
        axios
            .patch(
                "https://chat-prod-dvbe.onrender.com/api/v1/users/updateMe",
                formData,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                if (res.data.status === "success") {
                    console.log(res);
                    console.log("create profile Successful");
                    toast.success("create profile Successful");
                    setTimeout(() => {
                        navigate("/login");
                    }, 5000);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response.data.message);
                setLoading(false);
            });
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: windowWidth > 900 ? "25%" : (windowWidth < 500 ? "80%" : "40%"), textAlign: "center" }}>
                    <label htmlFor="file-upload">
                        <img
                            src={photo}
                            alt="Profile"
                            style={{ width: "120px", marginTop: "15px", height: "120px", cursor: "pointer" }}
                        />
                    </label>
                    <TextField id="file-upload" type="file" style={{ display: "none" }} onChange={handleFileChange} />
                    <TextField
                        id="outlined-basic"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Full Name"
                        required
                        type="text"
                        size="small"
                        style={{ display: "block", marginBottom: "5%", marginTop: "2%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        label="Age"
                        required
                        type="number"
                        size="small"
                        style={{ display: "block", marginBottom: "5%" }}
                    />
                    <FormControl style={{ marginBottom: "5%", width: "330px" }} size="small">
                        <InputLabel id="demo-select-small-label">Gender</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={gender}
                            label="Gender"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-basic"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        label="phone Number"
                        required
                        type="text"
                        size="small"
                        style={{ display: "block", marginBottom: "5%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        label="Location"
                        required
                        type="text"
                        size="small"
                        style={{ display: "block", marginBottom: "5%" }}
                    />
                    <TextField
                        id="outlined-basic"
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value)}
                        label="BirthDay"
                        required
                        type="text"
                        size="small"
                        style={{ display: "block", marginBottom: "5%" }}
                    />
                    <Button
                        variant="outlined"
                        type="submit"
                        onClick={setData}
                        className="btn"
                        style={{ borderRadius: "5px", position: "relative", width: "200px" }}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "submit"}
                    </Button>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
}

export default CreateProfile;
