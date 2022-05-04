import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { TrailInfo } from './TrailInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TrailCard.scss';

const TrailCard = (props) => {
    const [show, setShow] = useState(false);
    const [weather, setWeather] = useState({
        main: '',
        weather: [
            {
                main: '',
                description: ''
            }
        ],
        cod: 401
    });
    const [info, setInfo] = useState({
        name: '',
        address: ''
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTrailClick = () => {
        setShow(true);
        // only update trail and weather info once
        if (info.name === '') {
            setInfo(TrailInfo[0].trails.find((v) => v.name === props.name))
            console.debug(TrailInfo[0].trails)
        }
        if (weather.cod !== 200 && info.zip !== undefined) {
            // get longitude & latitude from geolocationapi
            fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + info.zip +
                ',us&appid=' + process.env.REACT_APP_WEATHER_API_KEY
            )
                .then((response) => response.json())
                .then((json) => {
                    let lat = json.lat;
                    let lon = json.lon;
                    // get current weather from openweathermap api
                    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat +
                        '&lon=' + lon + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY + '&units=imperial'
                    )
                        .then((response) => response.json())
                        .then((json) => {
                            if (json.cod === 200) {
                                setWeather(json);
                            }
                        });
                });
        }
    };
    return (
        <>
            <Card id="trailcard" style={{ padding: "15px", float: "left", cursor: "pointer" }} onClick={handleTrailClick} >
                <Card.Img variant="top" src={props.img} height="180" width="240" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Trail Difficulty: {info.difficulty}</p>
                        <p>Address: {info.address + ", " + info.city + "," + info.zip}</p>
                        <div>
                            <img alt="Trailhead" src={info.largeImgURL} key={info.id} width="300" height="200" />
                        </div>
                        <br />
                    </div>
                    <div>
                        <p>Temp: {weather.main.temp}</p>
                        <p>{weather.weather[0].main}</p>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export { TrailCard };