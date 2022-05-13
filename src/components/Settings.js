import React, {useState, useEffect} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import '../css/Settings.scss';
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode.tsx";
import { Container, Row, Col } from 'react-bootstrap';
import { storage, db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';

import alternate from "./pfp/trailpic.jpeg"


const initialDefaultData = Object.freeze({
    name: '',
    city: '',
    zipcode: ''
});

const Settings = () => {
    const [ defaultData, updateDefaultData ] = React.useState(initialDefaultData);
    const [ image, setImage ] = React.useState(null);
    const [ url, setUrl ] = React.useState(null);
    const { user } = useUserAuth();
    const defaultCollectionRef = collection(db, "default");
    const [err, setErr] = useState();

    {/* Debug */}
    useEffect(() => {
        console.log(defaultData);
    }, [defaultData])

    useEffect(() => {
        updateDefaultData({
            ...defaultData,
            email: user.email
        });
    }, [user])

    // Grab name
    const handleChangeName = (e) => {
        updateDefaultData({
            ...defaultData,
            name: e.target.value.trim()
        });
    };


    // grab city
    const handleChangeCity = (e) => {
        updateDefaultData({
            ...defaultData,
            city: e.target.value.trim()
        });
    };

    // grab zipcode
    const handleChangeZipcode = (e) => {
        updateDefaultData({
            ...defaultData,
            zipcode: e.target.value.trim()
        });
    };

    // submit default form
    const handleDefaultSubmit = (e) => {
        e.preventDefault();
        if(defaultData.name !== '' && defaultData.city !== '' && defaultData.zipcode !== ''
            && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(defaultData.zipcode)) {
            addDoc(defaultCollectionRef, defaultData);
        } else {
            console.log("missing content/invalid zipcode");
        }
    }

    const handleImageChange = (e) => {
        {/*setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })*/}
        setImage(e.target.files[0]);
    };

    const errorHandler = () => {
        setUrl(alternate);
    }

    const handleImageSubmit = (e) => {
        const imageRef = ref(storage, "pfp");
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                console.log("successfully grabbed image url");
                setUrl(url);
            })
            .catch(error => {
                console.log(error.message, "error getting image file"); 
            });
            setImage(null);
        })
        .catch(error => {
            console.log(error.message);
        });
    };

    return (

        <div className="p-4 box" >
                <form noValidate>

                    {/*<Container
                        style={{ justifyContent: "center", display: "flex", alignItems: "center"
                    }}>*/}
                        {/*<input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            onChange = {handleImageChange}
                        />*/}
                    <Avatar
                      src= {url}
                      sx= {{ width: 100, height: 100 }}
                      variant = "square"
                      imgProps={{onError: errorHandler,}}
                    />
                    <input type = "file" onChange = {handleImageChange} />
                    <button onClick = {handleImageSubmit}> upload </button>

                    <div><h2><b>Change Mode</b></h2></div>

                    <Container
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <DarkMode />
                    </Container>  

                    <div><h2><b>Change Defaults</b></h2></div>

                    {/* Change Trail name */}
                    <label id="message"><br></br>name</label>
                    <div className="form-group">
                        <textarea 
                            className="fb-text"
                            name="message" 
                            rows="1" 
                            cols="5"
                            placeholder="Trail Name"
                            onChange={ handleChangeName }>
                        </textarea>
                    </div>


                    {/* Change City */}
                    <label id="message"><br></br>city</label>
                    <div className="form-group">
                        <textarea 
                            className="fb-text"
                            name="message" 
                            rows="1" 
                            cols="5"
                            placeholder="City Name"
                            onChange={ handleChangeCity }>
                        </textarea>
                    </div>

                    {/* Change Zipcode */}
                    <label id="message"><br></br>zipcode</label>
                    <div className="form-group">
                        <textarea 
                            className="fb-text"
                            name="message" 
                            rows="1" 
                            cols="5"
                            placeholder="Zipcode"
                            onChange={ handleChangeZipcode }>
                        </textarea>
                    </div>

                    {/* SUBMISSION BUTTON */}
                    <button className="btn btn-primary" onClick={ handleDefaultSubmit }>Submit</button>
                </form>
            </div>

    );
};


export default Settings;

