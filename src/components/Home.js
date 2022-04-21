import React from "react";
import { Button } from "react-bootstrap";
import { PhotoAlbum } from "react-photo-album";
import photos from "../photos";
import { useUserAuth } from "../context/UserAuthContext";


const Home = () => {
    const { user, logout } = useUserAuth()
    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div>
            {/* <h1> Welcome {user.email}</h1> */}
            <Button variant="primary" onClick={handleLogout}> Log out </Button>
            <PhotoAlbum layout="columns" photos={photos} />
        </div>
    )
}

export default Home;

