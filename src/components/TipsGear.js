import { useEffect, useState } from "react";
import HikingClothes from "./HikingClothes";
import HikingGear from "./HikingGear";
import Precautions from "./Precautions";
import '../css/TipsGearCSS.scss';


const TipsGear = () => {
    const [showComponent, updateShowComponent] = useState("HikingGear");

    const components = {
        "" : "",
        "HikingGear" : <HikingGear />,
        "Precautions" : <Precautions />,
        "HikingClothes" : <HikingClothes />
    }

    return (
        <div id="tips-main">
            <div id="tipsnav">
                <button className="tipsnav-link" id={showComponent === "HikingGear" ? "highlight" : "" } onClick={() => updateShowComponent("HikingGear")}>Hiking Gear</button>
                <button className="tipsnav-link" id={showComponent === "HikingClothes" ? "highlight" : "" } onClick={() => updateShowComponent("HikingClothes")}>Hiking Clothes</button>
                <button className="tipsnav-link" id={showComponent === "Precautions" ? "highlight" : "" } onClick={() => updateShowComponent("Precautions")}>Precautions</button>
            </div>
            <div>
                {components[showComponent]}
            </div>
        </div>
    )
}

export default TipsGear;