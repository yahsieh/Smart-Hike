import React, { useEffect, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import photos from "../photos";
import { TrailCard } from './TrailCard';
import '../css/HomeCSS.scss';
import {collection, doc, getDoc, getDocs, setDoc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import { db } from "../firebase-config";
import Ratings from "./Ratings";
import {ReactComponent as Heart} from "../assets/favorite_FILL1_wght400_GRAD0_opsz48.svg";

// matching data with preference form
const searchData = Object.freeze({
    city: '',
    zipcode: '',
    name: ''
});

const Home = () => {
    const [sData, updateSearchData] = React.useState(searchData);
    const history = useNavigate();
    const { user } = useUserAuth();
    const [ratings, setRatings] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // Get ratings & update favorites
    const ratingsCollectionRef = collection(db, "trailratings");
    useEffect(() => {
        const getRatings = async () => {
            const data = await getDocs(ratingsCollectionRef);
            setRatings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getRatings();
    }, []);

    useEffect(() => {
        const getFavorites = async () => {
            if(user.email) {
                const favoriteDoc = doc(db, "user-favorites", user.uid);
                const fdoc = await getDoc(favoriteDoc);
                setFavorites(fdoc.data().favorites);
            }
        }

        getFavorites();
    }, [user])

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

    // SORT RATINGS
    const order = (a, b) => {
        if(a.rating > b.rating) {
            return -1
        } else if (a.rating < b.rating) {
            return 1;
        }
        return 0;
    }

    // ADD FAVORITE TRAIL
    const addUserFavorites = async (trailID) => {
        if (user) {
            const userDocRef = doc(db, "user-favorites", user.uid);
            setDoc(userDocRef, {foo: 'bar'}, {merge: true});
            await updateDoc(userDocRef, {
                favorites: arrayUnion(trailID)
            });
            console.log(favorites);
        } else {
            history("/login");
        }
        // favorites.includes(trailID) === -1 ? setFavorites(prevArray => [...prevArray, trailID]) : console.log("Already Exists");
    }

    // REMOVE FAVORITE TRAIL
    const removeFavorite = async (trailID) => {
        if (user) {
            const userDocRef = doc(db, "user-favorites", user.uid);
            await updateDoc(userDocRef, {
                favorites: arrayRemove(trailID)
            });
        } else {
            history("/login");
        }
    }

    return (
        <div id="homepage">
            {/* BACKGROUND */}
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
                <div id="favorite-trails-main-container">
                    <div id="favorite-trails-banner">Highly Rated Trails</div>
                    <div id="favorite-trails">
                        {ratings.sort(order).map((trail) => (
                            <div id="card-container" key={trail.id}>
                                <TrailCard name={trail.name} img={trail.img}/>
                                <div id="rating">
                                    <Ratings docId={trail.id} rating={trail.rating} entries={trail.entries}/>
                                </div>
                                <div id="heart">
                                {favorites.includes(trail.id) ? 
                                    <Heart fill="red" onClick={() => removeFavorite(trail.id)}/> : 
                                    <Heart fill="grey"onClick={() => addUserFavorites(trail.id)}/>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXAMPLE PHOTOS SECTION */}
                <div id="example-photos-main-container">
                    <div id="example-photos-banner"> User Submitted Photos </div>
                    <div id="example-photos-content">
                        <PhotoAlbum layout="rows" photos={photos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

