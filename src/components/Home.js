import React from "react";
import { PhotoAlbum } from "react-photo-album";
import photos from "../photos";


const Home = () => {
    return (
        <div>
            {/* <h1> Welcome {user.email}</h1> */}
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    )
}

export default Home;

