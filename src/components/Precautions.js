import React, {useState} from "react";
import '../css/PreferenceCSS.scss';
import { useNavigate } from "react-router-dom";

//route back to preference page 
const Precautions = () => {
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
            <h1 id ="hikingClothesTitle">Precautions</h1> 
            <h2 hikingClothesCategories><u><center>Don't Walk off the Trail</center></u></h2>
            <center>            
            <img id = "imageBorder" src = "https://www.nps.gov/articles/images/Badlands-M.jpg" alt="don't walk off trail" width="40%" 
            height="300"></img>
            </center>
            <h2 hikingClothesCategories><u><center>Bring Lots of Water</center></u></h2>
            <center>            
            <img id = "imageBorder" src = "https://media.wired.com/photos/59548baa5578bd7594c464f5/master/pass/GettyImages-200218465-002_web.jpg" alt="water" width="40%" 
            height="300"></img>
            </center>
            <h2 hikingClothesCategories><u><center>Don't Touch or Feed Wildlife</center></u></h2>
            <center>            
            <img id = "imageBorder" src = "https://www.wethegoverned.com/wp-content/uploads/2019/04/do-not-feed-wildlife.jpg" alt="wildlife" width="40%" 
            height="300"></img>
            </center>
            <h2 hikingClothesCategories><u><center>Don't Touch Poison Oak</center></u></h2>
            <center>            
            <img id = "imageBorder" src = "https://www.dermrochester.com/content/uploads/2018/05/PoisonIvy.jpg" alt="poison oak" width="40%" 
            height="300"></img>
            </center>
            <h2 hikingClothesCategories><u><center>Bring a friend</center></u></h2>
            <center>            
            <img id = "imageBorder" src = "https://prolifefitnesscentre.com/wp-content/uploads/2017/12/bring-a-friend-crop-300x284.png" alt="poison oak" width="40%" 
            height="300"></img>
            </center>
        </div>
    );
}
export default Precautions;