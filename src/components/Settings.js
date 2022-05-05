import React, {useState, useEffect} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import '../css/Settings.scss';
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode.tsx";
import { Container, Row, Col } from 'react-bootstrap';
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import Avatar from "react-avatar-edit";
import Ava from "react-avatar";


const initialDefaultData = Object.freeze({
    name: '',
    city: '',
    zipcode: ''
});

const Settings = () => {
    const [ defaultData, updateDefaultData ] = React.useState(initialDefaultData);
    const [ preview, setPreview] = React.useState(null);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if(defaultData.name !== '' && defaultData.city !== '' && defaultData.zipcode !== ''
            && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(defaultData.zipcode)) {
            addDoc(defaultCollectionRef, defaultData);
        } else {
            console.log("missing content/invalid zipcode");
        }
    }

    const navigate = useNavigate();
    const handlePreferences = async (e) =>{
        e.preventDefault();
        setErr("");
        try {
            navigate("/preference")
        } catch (err) {
            setErr(err.message)
        }
    }

    function onClose() {
        setPreview(null);
    }
    function onCrop(pv) {
        setPreview(pv);
    }
    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 2000000) {
            alert("File is too big!");
            elem.target.value = "";
        }
    }



    return (

        <div className="p-4 box" >
                <form noValidate>

                    <Container
                        style={{ justifyContent: "center", display: "flex", alignItems: "center"
                    }}>
                        <Ava name= {user.email} size="150" round = {true}/>
                    </Container>

                    <Avatar
                        width={320}
                        height={150}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        placeholderSource={require('./pfp/trailpic.jpeg')}
                        src= {null}
                      />
                      <br/>
                      {preview && (
                        <>
                          <img src={preview} alt="Preview" />
                          <a href={preview} download="avatar">
                            Save Pic
                          </a>
                        </>
                      )}

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
                    <button className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
                </form>
            </div>

    );
};


export default Settings;

