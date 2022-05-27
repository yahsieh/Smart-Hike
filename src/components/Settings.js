import React, {useState, useEffect} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import '../css/Settings.scss';
import DarkMode from "./DarkMode.tsx";
import { Container } from 'react-bootstrap';
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import PFP from "./Profile.js"

const initialDefaultData = Object.freeze({
    name: '',
    city: '',
    zipcode: ''
});

const Settings = () => {
    const [ defaultData, updateDefaultData ] = React.useState(initialDefaultData);
    const { user } = useUserAuth();
    const defaultCollectionRef = collection(db, "default");

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

    // submit trail suggestions
    const handleDefaultSubmit = (e) => {
        e.preventDefault();
        if(defaultData.name !== '' && defaultData.city !== '' && defaultData.zipcode !== ''
            && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(defaultData.zipcode)) {
            addDoc(defaultCollectionRef, defaultData);
        } else {
            console.log("missing content/invalid zipcode");
        }
    }

    return (

        <div className="p-4 box" >
                <form noValidate>
                
                    {/* pfp component */}
                    <PFP />

                    {/*Darkmode component */}
                    <Container
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <DarkMode />
                    </Container>  

                    <div><h2><b>Trail Suggestions</b></h2></div>

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

