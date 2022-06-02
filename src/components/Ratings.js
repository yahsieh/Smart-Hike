import React, { useState, useEffect } from "react";
import "../css/RatingsCSS.scss";
import { ReactComponent as FullStar } from "../assets/star_FILL0_wght400_GRAD0_opsz48.svg";
import { updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../firebase-config';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";



const Ratings = (props) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [once, setOnce] = useState(false);
    const history = useNavigate();
    const { user } = useUserAuth();

    // GET DB RATING
    useEffect(() => {
        if (props.rating) {
            setRating(Math.round(props.rating));
        }
    }, []);

    // UPDATE DB RATING ON SUBMISSION
    const updateRating = async (rating) => {
        const ratingsDoc = doc(db, "trailratings", props.docId);
        setDoc(ratingsDoc, { name: props.trailname, img: props.img, city: props.city}, { merge: true });
        var calcdEntries = props.entries + 1;
        var calcdRating = props.rating + ((rating - props.rating) / calcdEntries);

        const newRating = { rating: calcdRating, entries: calcdEntries };
        await updateDoc(ratingsDoc, newRating);
    };

    // RATING SUBMISSION
    const handleClick = (e) => {
        if (!user) {
            history("/login");
        }

        if (once === false) {
            setRating(e);
            updateRating(e);
            setOnce(true);
        } else {
            console.log("Already Clicked");
        }
    };

    // HOVER
    const handleHover = (e) => {
        setHover(e);
    };

    return (
        <div id="rating">
            {[...Array(5)].map((star, iter) => {
                const currRating = iter + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={currRating}
                            onClick={() => handleClick(currRating)}
                        />

                        <FullStar
                            fill={currRating <= (hover || rating) ? 'gold' : 'grey'}
                            className="star"
                            onMouseEnter={() => handleHover(currRating)}
                            onMouseLeave={() => handleHover(null)}
                        />
                    </label>
                );
            })}
            {/* {parseFloat(props.rating).toPrecision(3)/1} */}
        </div>
    );
}

export default Ratings;