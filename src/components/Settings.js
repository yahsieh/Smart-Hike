import React, {useState} from "react";
import '../css/Settings.scss';
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode.tsx";
import { Container, Row, Col } from 'react-bootstrap';


//route back to preference page 
const Settings = () => {
    const [err, setErr] = useState();
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
    return (
    <div>

        <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&family=Prompt&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400&family=Hind+Siliguri:wght@500&family=Prompt&family=Roboto:wght@300;400&display=swap" rel="stylesheet"></link>
        <button className="btn btn-primary" onClick = {handlePreferences} variant="primary" type="Submit" style={{}}>
        Preferences
        </button>

        <h1 id ="SettingsTitle">Settings</h1> 

    <Container
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <DarkMode />
    </Container>    

    <Container
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
    <Container>
        Change Default City: 
        <input type = "text" name = 'enter' class = 'textboxsize'/>

        Change Default Zipcode:
        <input type ="text" name = 'enter' class = 'textboxsize'/>

        <button type = "submit">
        Submit
        </button>

    </Container>

    </Container>

    </div>
    );
}
export default Settings;

