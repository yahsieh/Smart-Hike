import React, { useState, useEffect, useRef } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import '../css/FeedbackCSS.scss';
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import emailjs, { send } from 'emailjs-com';

const initialFeedbackData = Object.freeze({
    email: '',
    subect: '',
    content: ''
});

const Feedback = () => {
    const [ feedbackData, updateFeedbackData ] = React.useState(initialFeedbackData);
    const { user } = useUserAuth();
    const feedbackCollectionRef = collection(db, "feedback");

    // DEBUG
    useEffect(() => {
        console.log(feedbackData);
    }, [feedbackData])

    // INITIALIZATION
    useEffect(() => {
        updateFeedbackData({
            ...feedbackData,
            email: user.email
        });
    }, [user])

    // SUBJECT GRABBING
    const handleChangeSubject = (e) => {
        updateFeedbackData({
            ...feedbackData,
            subect: e.target.value.trim()
        });
    };

    // TEXT AREA VARS
    const [ currentTextLength, setCurrentTextLength ] = useState(0);
    const textareaLength = 300;

    // MESSAGE GRABBING
    const handleChangeContent = (e) => {
        setCurrentTextLength(e.target.value.length);
        updateFeedbackData({
            ...feedbackData,
            content: e.target.value.trim()
        });
    };

    // TEXTAREA PADDING
    const padding = (length) => {
        if(length < 10) return "00" + length;
        else if(length < 100) return "0" + length;
        return length;
    };

    // FEEDBACK SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if(feedbackData.content !== '' && feedbackData.subect !== '') {
            addDoc(feedbackCollectionRef, feedbackData);
            sendEmail(e);
        } else {
            console.log("EMPTY CONTENT or EMPTY SUBJECT");
        }
    }

    // SEND EMAIL
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_qcpdhis', form.current, process.env.REACT_APP_EMAILJS_API_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return(
        <>
            <div className="p-4 box" >
                <form ref={form} noValidate>
                    <div><h2><b>Feedback</b></h2></div>

                    {/* FEEDBACK EMAIL */}
                    <label id="user">Email</label>
                    <div className="form-group" name="from_name">
                        {user.email}
                    </div> 
                    
                    {/* FEEDBACK SUBJECT */}
                    <label id="subject"><br></br>Subject</label>
                    <div className="form-group">
                        <select 
                            name="subject" 
                            required
                            onChange={ handleChangeSubject }>
                            <option value="">&lt; Select an option &gt;</option>
                            <option value="Home">Home</option>
                            <option value="Search">Search</option>
                            <option value="Hiking Clothes">Hiking Clothes</option>
                            <option value="Settings">Settings</option>
                            <option value="Account">Account</option>
                            <option value="General">General</option>
                        </select>
                    </div>

                    {/* FEEDBACK CONTENT */}
                    <label id="message"><br></br>Content</label>
                    <div className="form-group">
                        <textarea 
                            className="fb-text"
                            name="message" 
                            rows="10" 
                            cols="30"
                            maxLength={textareaLength}
                            placeholder="Begin typing here..."
                            onChange={ handleChangeContent }>
                        </textarea>
                        <span id="textareaLength"> {padding(currentTextLength)} / {textareaLength}</span>
                    </div>

                    {/* SUBMISSION BUTTON */}
                    <button className="btn btn-primary" onClick={ handleSubmit }>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Feedback;