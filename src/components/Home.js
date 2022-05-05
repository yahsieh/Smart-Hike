import React, { useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import photos from "../photos";
import '../css/HomeCSS.scss';

// matching data with preference form
const searchData = Object.freeze({
    city: '',
    zipcode: '',
    name: ''
});

const Home = () => {
    const[sData, updateSearchData] = React.useState(searchData);
    const history = useNavigate();
    const { user } = useUserAuth();

    // Handling change in text fields
    const handleChange = (e) => {
        updateSearchData({
            ...sData,
            [e.target.name]: e.target.value.trim()
        });
    };


    // Sending input text to /preference page
    const handleSubmit = (e) => {
        if(user) {
            e.preventDefault()
            // console.log(sData);
            history("/preference", {state:{data: sData}});
        } else {
            history("/login");
        }
    };

    return (
        <div id="homepage">
            <PhotoAlbum layout="columns" photos={photos} />
            <div id="main-container">
                <div id="search-box-container">
                    <div id="search-box-banner">
                        <h1> Welcome {user ? user.email : ""}</h1>
                            Start your adventure!
                    </div>
                    <div id="search-box">
                        <div className="form-horizontal">
                            <input type="text" name="name" onChange={ handleChange } placeholder="Name" required />
                        </div>
                        <div className="form-horizontal">
                            <input type="text" name="city" onChange={ handleChange } placeholder="City" required />
                        </div>
                        <div className="form-horizontal">
                            <input type="text" name="zipcode" onChange={ handleChange } placeholder="Zipcode" required />
                        </div>
                        <button onClick={ handleSubmit }>
                            search
                        </button>
                    </div>
                </div>
                <div id="favorite-trails-container">
                </div>
            </div>
        </div>
    )
}

export default Home;

