import React,{useState, useEffect} from "react";

function ApiTest(){

const[data, setData] = useState([]);

const apiGet = () => {
    fetch('https://prescriptiontrails.org/api/trail/?id=3')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setData(json);
    });
};

useEffect(() => {
    apiGet();
}, []);

    return (
        <div>
            Api Call <br />
            <button onClick={apiGet}>Get Data</button>
            <br/>
            {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
            <div>
                <p>Trail Difficulty on scale of 5: {data.difficulty}</p>
                <p>Trail Name: {data.name}</p>
                <p>Address: {data.address} + {data.city} + {data.zip}</p>
                <p>Image from Trail</p>
                <div>
                  <img src={data.largeImgURL} key={data.id} width="300" height="200"/>
                </div>
            </div>
        </div>
    );
}
export default ApiTest;