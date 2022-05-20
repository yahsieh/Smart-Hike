import React, { useEffect, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import photos from "../photos";
import { TrailCard } from './TrailCard';
import '../css/HomeCSS.scss';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Ratings from "./Ratings";

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
    const[ratings, setRatings] = useState([]);

    // Get ratings
    const ratingsCollectionRef = collection(db, "trailratings");
    useEffect(() => {
        const getRatings = async () => {
            const data = await getDocs(ratingsCollectionRef);
            setRatings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getRatings();
    }, []);

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

    // SORT FAVORITES
    const order = (a, b) => {
        if(a.rating > b.rating) {
            return -1
        } else if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    }

    return (
        <div id="homepage">
            {/* BACKGROUND */}
            <PhotoAlbum layout="columns" photos={photos} />
            <div id="main-container">
                <div id="search-box-container">

                    {/* SEARCH BOX HEADER */}
                    <div id="search-box-banner">
                        <h1> Welcome {user ? user.email : ""}</h1>
                            Start your adventure!
                    </div>

                    {/* SEARCH BOX */}
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

                {/* FAVORITES CONTAINER */}
                <div id="favorite-trails-container">
                    {ratings.sort(order).map((trail) => (
                        <div key={trail.id}>
                            <TrailCard name={trail.name} img={trail.img}/>
                            <Ratings docId={trail.id} rating={trail.rating} entries={trail.entries}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;

