import React, {useState} from "react";
import '../css/PreferenceCSS.scss';
import { useNavigate } from "react-router-dom";


const HikingGear = () => {
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
            <h1 id ="hikingClothesTitle">Suggested Hiking Gear</h1> 
            <p id="hikingClothesParagraph">
            The gear you bring with you on a hike can help make your hiking experience a lot better. Some recommended gear to bring on a hike are a :
            <ul id = "hikingClothesParagraph">
            <li>Compass</li>
            <li>Trekking Poles</li>
            <li>Refillable Water Bottle</li>
            <li>Towel</li>
            <li>Portable Charger</li>
            <li>Flashlight</li>
            <li>Lighter</li>
            <li>Knife</li>
            <li>First Aid Kit</li>
            <li>Backpack</li>
            <li>Binoculars</li>
            <li>Multitool</li>
            </ul>
            A compass is a device used for navigation and geographic orientation. Trekking Poles help provide support to hikers when they are traveling along their hike. A refillable water bottle is not only good 
            for the environment and saves you money, but it can be refilled along your hike if there are water stations available. In the age of smartphones, it is important that your phone does not run out of battery 
            while you are hiking. You may need to make phone calls in case of an emergency. Bringing a portable charger helps to ensure your phone can be charged if it runs out of battery.
            </p>  
            <p id="hikingClothesParagraph">
            A flashlight is helpful to use if it becomes too dark to see. Lighters can be used to start a fire if warmth is needed or you want to cook food. A knife 
            is a versatile utensil that can cut things if needed. First aid kits are handy to have on a hike because people can get severely injured on a hike. First aid kits
            contain items such as bandages, gauze pads, scissors, tweezers, eye pads, and first aid tape rolls. A backpack can be used to pack some of these items and hold anything else that you want to bring with you. Binoculars help the user to see far.
            </p>  
            <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
            <div id="cardHikingClothes">
    <a href = "https://www.amazon.com/Orienteering-Compass-Backpacking-Navigation-Professional/dp/B07ZP6KD2M/ref=sr_1_5?crid=2HFHQ6WUXL3SE&keywords=compass&qid=1651630324&sprefix=compass%2Caps%2C161&sr=8-5" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81PdpFvCt6L.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="compass" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Compass</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Cascade-Mountain-Tech-Aluminum-Collapsible/dp/B01L2HYPNW/ref=sr_1_4?crid=1DEEFJUN3UD7X&keywords=trekking%2Bpoles&qid=1651622187&s=sporting-goods&sprefix=trekking%2Bpole%2Csporting%2C270&sr=1-4&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71Leic953AL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="trekking poles" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Trekking Poles</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
    <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/MIRA-Reusable-BPA-Free-Plastic-Locking/dp/B07RCKF9R2/ref=sr_1_11?crid=3MBTDNOB8D4FC&keywords=refillable+water+bottle&qid=1651631412&s=sporting-goods&sprefix=refillable+water+bottle%2Csporting%2C140&sr=1-11" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/51XlpN4tm7L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="refillable water bottle" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Refillable Water Bottle</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end first row*/}
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Rainleaf-Microfiber-Towel-Inches-Green/dp/B01K1TX77W/ref=sr_1_5?crid=IQGQWMYQU7LV&keywords=hiking+towel&qid=1651792560&sprefix=hiking+towel%2Caps%2C146&sr=8-5" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61HHXRkRz6L.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="towel" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Towel</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Ultra-High-Intelligent-Controlling-High-Capacity-Compatible/dp/B096VHV2DL/ref=sr_1_4?keywords=portable%2Bphone%2Bcharger&qid=1651792814&sr=8-4&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/41mjhKz139S.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="portable charger" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Portable Charger</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Flashlights-Hausbell-Flashlight-Modes-Gifted/dp/B01B8VPM7A/ref=sr_1_5?crid=16CL8PV1CKZ1N&keywords=flashlight&qid=1651792943&sprefix=flashlight%2Caps%2C184&sr=8-5&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71Xrxa%2BPtiL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="flashlight" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Flashlight (Pack of 2)</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end second row*/}
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/BKOU172-Utility-Lighter-Assorted-Colors/dp/B00XTAM6PA/ref=sr_1_5_mod_primary_new?crid=2J0Z3IW905GVW&keywords=lighter&qid=1651793105&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=lighter%2Caps%2C151&sr=8-5" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71R82kgpRXL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="lighter" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Lighter</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Smith-Wesson-SWA24S-Serrated-Aluminum/dp/B007HAE5GQ/ref=sr_1_2?crid=2ONPCT0Y0HUMZ&keywords=knife%2Bhiking&qid=1651793361&sprefix=knife%2Bhiking%2Caps%2C145&sr=8-2&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81FWNXaX%2BvL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="knife" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Knife</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Compact-Designed-Emergency-Waterproof-Camping/dp/B01EG3J430/ref=sr_1_7?crid=2TW7QOCIJ0OP8&keywords=first%2Baid%2Bkit&qid=1651793567&sprefix=first%2Baid%2Bkit%2Caps%2C143&sr=8-7&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/512V-EypsTL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="first aid kit" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>First Aid Kit</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end third row*/}
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Venture-Pal-Lightweight-Packable-Backpack/dp/B07PY3D9M7/ref=sr_1_5?crid=TVAS6Q7BVYKA&keywords=hiking%2Bbackpack&qid=1651793702&sprefix=hiking%2Bbackpack%2Caps%2C163&sr=8-5&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81keZ0t9wKL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="backpack" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Backpack</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Binoculars-Waterproof-Binocular-Traveling-Sightseeing/dp/B0756BXDTX/ref=sr_1_4?crid=SP2TH0IRF6I&keywords=binoculars&qid=1651793830&sprefix=binoculars%2Caps%2C163&sr=8-4" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71aIoTvKaLL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="binoculars" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Binoculars</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Multitool-Professional-Stainless-Screwdriver-Survival/dp/B07VW96CVJ/ref=sr_1_5?crid=A3VMBFDF5PJ3&keywords=multitool&qid=1651793968&sprefix=multitool%2Caps%2C150&sr=8-5" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61F2k5mHPDL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="multitool" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Multitool</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end of fourth row*/}
        </div>

    );

    }
    export default HikingGear;