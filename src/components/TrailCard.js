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
    const [info, setInfo] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTrailClick = () => {
        if (info) {
            // setInfo(
            //     { "id": 1, "name": "Tingley Field", "city": "Albuquerque", "zip": 87102, "crossstreets": "Coal and 10th SW", "address": "10 Atlantic Ave SW", "transit": "ABQ Ride Stops:  #53, #54", "lat": "35.0772432", "lng": "-106.6555564", "desc": "This%20redeveloped%20park%20provides%20a%20catchment%20basin%20in%20monsoon%20season%2C%20and%20the%20new%20recreation%20facilities%20and%20walking%20trail%20are%20great%20for%20the%20whole%20family.", "lighting": "On trail and parking lot", "difficulty": 1, "surface": "6-foot+ wide sidewalk, 4-foot wide gravel on 2 sides", "parking": "On site", "facilities": "Restrooms", "hours": "6 a.m. - 10 p.m.", "loopcount": 1, "satImgURL": "https:\/\/prescriptiontrails.org\/admin\/new\/images\/1450547549tingleyParkSat.png", "largeImgURL": "https:\/\/prescriptiontrails.org\/admin\/new\/images\/1455036748P1130010.jpg", "thumbURL": "https:\/\/prescriptiontrails.org\/admin\/new\/images\/square_1455036748P1130010.jpg", "attractions": ["%3Ca%20href%3D%22https%3A%2F%2Fwww.cabq.gov%2Fculturalservices%2Fbiopark%2Fzoo%22%3EZoo%3C%2Fa%3E%20located%20across%2010th%20Street", "Tennis%20courts%20across%208th%20street", "Shaded%20playgrounds%20and%20picnic%20area", "Grassy%20field", "Softball%20fields"], "loops": { "1": { "name": "Main Loop", "distance": "0.6", "steps": 1267 } }, "published": "true", "rating": 3, "ratings": 1, "favorites": 0, "ModifiedTime": "2019-09-30 11:55:21", "reviews": 1, "url": "https:\/\/prescriptiontrails.org\/trail\/1\/tingley-field\/" }
            // )
            fetch('https://prescriptiontrails.org/api/filter/?by=name&name=' + props.name + '&offset=0&count=10')
                .then((response) => response.json())
                .then((json) => setInfo(json))
        }
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
                                setWeather(json);
                            }
                        });
                });
        }
    };
    return (
        <>
            <Card onClick={handleShow} >
                <a href="#" onClick={handleTrailClick}>
                    <Card.Img variant="top" src={props.img} height="180" width="100" />
                </a>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{info.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Trail Difficulty on scale of 5: {info.difficulty}</p>
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

export default TrailCard;