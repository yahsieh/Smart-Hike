import { useEffect, useState } from "react";
import { useAuth, upload } from "../firebase-config";
import { Container } from 'react-bootstrap';

import Avatar from "@mui/material/Avatar";
import alternate from "./pfp/uci_logo.png"

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(alternate);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleImageSubmit() {
    upload(photo, currentUser, setLoading);
  }

  const errorHandler = () => {
      setPhotoURL(alternate);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  return (
    <div className="fields">
      <Container
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
      }}>
        <Avatar
          src= {photoURL}
          sx= {{ width: 150, height: 150 }}
          variant = "circle"
          imgProps={{onError: errorHandler,}}
        />
      </Container>

      <Container
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
      }}>
        <input type = "file" onChange = {handleImageChange} />
        <button disabled={loading||!photo} onClick = {handleImageSubmit}> upload </button>
      </Container>

    </div>
  );
}