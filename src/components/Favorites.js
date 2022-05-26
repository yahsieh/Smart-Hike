import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { arrayRemove, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { TrailCard } from "./TrailCard";
import '../css/FavoritesCSS.scss';

const Favorites = () => {
    const { user } = useUserAuth();
    const [favorites, setFavorites] = useState([]);
    const [trails, setTrails] = useState([]);

    // MOUNT LOAD FAVORITES
    useEffect(() => {
        const getFavorites = async () => {
            if(user.email) {
                const favoriteDoc = doc(db, "user-favorites", user.uid);
                const fdoc = await getDoc(favoriteDoc);
                setFavorites(fdoc.data().favorites);
            }
        }

        const getTrails = async () => {
            const trailsCollectionRef = collection(db, "trailratings");
            const data = await getDocs(trailsCollectionRef);
            setTrails(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        
        getFavorites();
        getTrails();
    }, [user]);

    // REMOVE FAVORITE
    const removeFavorite = async (trailID) => {
        const userDocRef = doc(db, "user-favorites", user.uid);
        await updateDoc(userDocRef, {
            favorites: arrayRemove(trailID)
        });
        setFavorites(favorites.filter(trail => trail !== trailID));
    }

    return (
        <div id='favorites-main-container'>
            <div id='favorites-banner'>
                Your Favorites
                <hr></hr>
            </div>
            <div id='favorites-container'>
                {trails.map((trail) => (
                    favorites.includes(trail.id) ?
                    <div className='favorites-card-container'>
                        <TrailCard key={trail.id} name={trail.name} img={trail.img} />
                        <button onClick={() => removeFavorite(trail.id)}>Unfavorite</button>
                    </div>
                    :
                    ''
                ))}
            </div>
        </div>
    )
};

export default Favorites;