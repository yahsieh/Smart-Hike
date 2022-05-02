import React, {useState} from "react";
import '../css/PreferenceCSS.scss';
import { useNavigate } from "react-router-dom";

//route back to preference page 
const HikingClothes = () => {
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
    {/* <button className="btn btn-primary" onClick = {handlePreferences} variant="primary" type="Submit" style={{}}>
    Preferences
    </button> >>>>>ADDED TO NAVBAR<<<<<*/}
    <h1 id ="hikingClothesTitle">Suggested Hiking Clothes</h1> 
    <p id="hikingClothesParagraph">
        A warm jacket, waterproof jacket, and either a hat, cap, or beanie are must haves on a hike. Especially if the weather is cold. The shoes you wear on a hike are extremely important too. 
        Boots and trailrunners are very durable options. Moisture-wicking gloves are good for wet or cold weather. 
        </p>  
    <p id="hikingClothesParagraph">
        Cotton shirts and jeans are not recommended because they hold onto water. 
        They keep you sweaty in hot weather and cold if it gets chilly and wet. The best material to wear in hot weather is polyester or nylon because they dry fast and absorb sweat. Clothes made of fleece or wool
        are great for cold weather because they help to keep you warm.
    </p>
    
    <h2 id= "hikingClothesCategories"><u><center>Footwear</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
            <div id="cardHikingClothes">
    <a href = "https://www.amazon.com/dp/B01HFL88XM?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81P7gInQ5%2BL.__AC_SY395_SX395_QL70_FMwebp_.jpg" alt="womens hiking boots" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Women's Merrell Boots</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B01HFPP5C0?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81m9GyEmoRL.__AC_SY395_SX395_QL70_FMwebp_.jpg" alt="mens hiking boots" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Merrell Boots</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
    <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B073WGGTQ5?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71wL04o1IpL.__AC_SY395_SX395_QL70_FMwebp_.jpg" alt="womens second hiking boots" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Women's Columbia Boots</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*End of footwear */}

    <h2 id= "hikingClothesCategories"><u><center>Waterproof Jackets</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B07W43QH7S?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61FJP0A26jL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="mens waterproof jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Waterproof Jacket</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B07G8GNB14?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61VjPcyv5UL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="womens waterproof jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Women's Waterproof Jacket</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B000FDYGMA?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/91ek1q7A7gL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="mens lightweight jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Lightweight Jacket</center></h3>
    </div>
    </div>
    </div>

    </div>
    {/*end of jacket*/}
    <h2 id= "hikingClothesCategories"><u><center>Insulated Jackets</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B08G1NRJSS?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81JLnkFlgaL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="mens insulated jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Insulated Jacket</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Little-Donkey-Andy-Lightweight-Breathable/dp/B08GHF19NL/ref=pd_day0_sccl_1/133-0435914-5670264?pd_rd_w=aJyfZ&pf_rd_p=8ca997d7-1ea0-4c8f-9e14-a6d756b83e30&pf_rd_r=8AHZ9REKG578MTETXQZH&pd_rd_r=0df5a55b-8b24-42ab-a491-3183812107a6&pd_rd_wg=SkyjJ&pd_rd_i=B09KNK65JX&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/81214D9EC%2BL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="womens insulated jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Women's Insulated Jacket</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B076VTDB7B?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/610wZP7f%2B-L.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="womens columbia jacket" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Columbia Women's Jacket</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end of insulted jackets*/}
    <h2 id= "hikingClothesCategories"><u><center>Headwear</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B001GBCXF2?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61uHILb9A3L.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="hat" width="100%" 
     height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Airflo Hat</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Top-Level-Unisex-Cuffed-Toboggan/dp/B01LZ27V22/ref=sr_1_6?crid=1SJJOHF3ZRZVV&keywords=beanie&qid=1650688065&sprefix=beanie%2Caps%2C217&sr=8-6&th=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61nS%2Bugwc6L.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="beanie" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Beanie</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/adidas-Originals-Relaxed-Strapback-Black/dp/B01IDSPDJI/ref=sr_1_1?crid=3MC8KOJQOT370&keywords=adidas+hat&qid=1650697076&sprefix=adidas+ha%2Caps%2C303&sr=8-1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/7105gGsM6QL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="adidas hat" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Adidas Hat</center></h3>
    </div>
    </div>
    </div>
    </div>
    {/*end of headwear*/}
    <h2 id= "hikingClothesCategories"><u><center>Gloves</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B00PD4A60M?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61wYrv3FElL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="black gloves" width="100%" 
     height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Cold Weather Gloves</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/dp/B07VFPY722?tag=tgcmartinagro-20&linkCode=ogi&th=1&psc=1" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71c3KinH8lL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="more black gloves" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Water Resistant Thermal Gloves</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/SIMARI-Winter-Gloves-Women-Screen/dp/B07WSBWXLK/ref=sr_1_7?crid=Z2YUCF5LD9CM&keywords=hiking+gloves&qid=1650697822&sprefix=hiking+glove%2Caps%2C170&sr=8-7" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/71eoiSyDiLL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="winter black gloves" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Winter Gloves</center></h3>
    </div>
    </div>
    </div>

    </div>
    {/*end of gloves*/}
    <h2 id= "hikingClothesCategories"><u><center>Pants</center></u></h2>
    <div id = "rowHikingClothes">
        <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/CQR-Tactical-Repellent-Ripstop-Lightweight/dp/B08V8N9CYX/ref=sr_1_7?crid=25WEVGTYW39ZJ&keywords=hiking+pants&qid=1650698199&sprefix=hiking+pants%2Caps%2C180&sr=8-7" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/61wawDkYbPL.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="mens hiking pants" width="100%" 
     height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Hiking Pants</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/Libin-Joggers-Lightweight-Athletic-Workout/dp/B08P3D8322/ref=sr_1_omk_6?crid=1YT6TQYH8AMII&keywords=womens+hiking+pants&qid=1650698653&sprefix=womens+hiking+pant%2Caps%2C140&sr=8-6" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/810ntr8-t9L.__AC_SX342_SY445_QL70_FMwebp_.jpg" alt="womens hiking pants" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Women's Hiking Pants</center></h3>
    </div>
    </div>
    </div>
    <div id = "columnHikingClothes">
        <div id="cardHikingClothes">
    <a href= "https://www.amazon.com/FREE-SOLDIER-Lightweight-Waterproof-Tactical/dp/B06XNQBXNN/ref=sr_1_2_sspa?keywords=hiking+pants&qid=1650698490&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOEZGQVYyNFhCODgzJmVuY3J5cHRlZElkPUEwNjQ0OTE3M1VJVVJKMEtYM0hITiZlbmNyeXB0ZWRBZElkPUEwODg1Nzc4MU0yT0lLNEdDNTJXQyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" target="_blank" rel="noopener noreferrer">
    <img src = "https://images-na.ssl-images-amazon.com/images/I/51420KM4yvL.__AC_SY445_SX342_QL70_FMwebp_.jpg" alt="mens hiking cargo pants" width="100%" 
    height="250"></img>
    </a>
    <div id="hikingClothesContainer">
        <h3><center>Men's Hiking Cargo Pants</center></h3>
    </div>
    </div>
    </div>

    </div>
    {/*end of pants*/}
    <p id ="hikingClothesParagraph">For additional tips on what clothes to wear on a hike, click <a href = "https://www.rei.com/learn/expert-advice/how-to-choose-hiking-clothes.html" target="_blank" rel="noopener noreferrer">here</a></p>
    </div>
    );
}
export default HikingClothes;