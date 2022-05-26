import React, { useEffect, useState } from "react";
import { TrailInfo } from './TrailInfo';
import { TrailCard } from "./TrailCard";
import '../css/CityCSS.scss';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase-config";
import { ReactComponent as Heart } from "../assets/favorite_FILL1_wght400_GRAD0_opsz48.svg";
import { useUserAuth } from "../context/UserAuthContext";

const City = () => {
    const [favorites, setFavorites] = useState([]);
    const { user } = useUserAuth();
    useEffect(() => {
        const getFavorites = async () => {
            if (user.email) {
                const favoriteDoc = doc(db, "user-favorites", user.uid);
                const fdoc = await getDoc(favoriteDoc);
                setFavorites(fdoc.data().favorites);
            }
        }

        getFavorites();
    }, [user])
    // ADD FAVORITE TRAIL
    const addUserFavorites = async (trailID) => {
        const userDocRef = doc(db, "user-favorites", user.uid);
        setDoc(userDocRef, { foo: 'bar' }, { merge: true });
        await updateDoc(userDocRef, {
            favorites: arrayUnion(trailID)
        });
        console.log(favorites);
        // favorites.includes(trailID) === -1 ? setFavorites(prevArray => [...prevArray, trailID]) : console.log("Already Exists");
    }

    // REMOVE FAVORITE TRAIL
    const removeFavorite = async (trailID) => {
        const userDocRef = doc(db, "user-favorites", user.uid);
        await updateDoc(userDocRef, {
            favorites: arrayRemove(trailID)
        });
    }
    return (
        <div id="city-page">
            <div id="city-header">
                Explore the Trail by City
            </div>
            <div id="city-content">
                <div className="city-name">
                    Albuquerque
                </div>
                <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Albuquerque")).slice(0, 10).map((trail) => (
                            <div className="city-trail" key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                                <div className="city-heart">
                                    {favorites.includes(trail.id) ?
                                        <Heart fill="red" onClick={() => removeFavorite(trail.id)} /> :
                                        <Heart fill="grey" onClick={() => addUserFavorites(trail.id)} />}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="city-name">
                    Las Cruces
                </div>
                <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Las Cruces")).slice(0, 10).map((trail) => (
                            <div className="city-trail" key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                                <div className="city-heart">
                                    {favorites.includes(trail.id) ?
                                        <Heart fill="red" onClick={() => removeFavorite(trail.id)} /> :
                                        <Heart fill="grey" onClick={() => addUserFavorites(trail.id)} />}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="city-name">
                    Lincoln County
                </div>
                <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Lincoln County")).slice(0, 10).map((trail) => (
                            <div className="city-trail" key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                                <div className="city-heart">
                                    {favorites.includes(trail.id) ?
                                        <Heart fill="red" onClick={() => removeFavorite(trail.id)} /> :
                                        <Heart fill="grey" onClick={() => addUserFavorites(trail.id)} />}
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    );

}
export default City;