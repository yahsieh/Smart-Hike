import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function TrailCard(props) {
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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTrailClick = () => {
        if (weather.cod !== 200) {
            // get longitude & latitude from geolocationapi
            fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + props.zip +
                ',us&appid=' + process.env.REACT_APP_WEATHER_API_KEY
            )
                .then((response) => response.json())
                .then((json) => {
                    let lat = json.lat;
                    let lon = json.lon;
                    // get current weather from openweathermap api
                    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat +
                        '&lon=' + lon + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY + '&units=imperial'
                        , { referrerpolicy: 'no-referrer-when-downgrade' })
                        .then((response) => response.json())
                        .then((json) => {
                            if (json.cod === 200) {
                                console.log(json);
                                setWeather(json);
                            }
                        });
                });
        }
    };
    return (
        <>
            <Card style={{ width: '18rem' }} onClick={handleShow} >
                <a href="#" onClick={handleTrailClick}>
                    <Card.Img variant="top" src={props.img} />
                </a>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{weather.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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

export default TrailCard;