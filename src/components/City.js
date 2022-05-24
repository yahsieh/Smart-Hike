import React from "react";
import { TrailInfo } from './TrailInfo';
import { TrailCard } from "./TrailCard";
import '../css/CityCSS.scss';

const City = () => {
    return (
        <div id="city-page">
            <div id="city-header">
                Explore the Trail by City
            </div>
            <div id="city-content">
                <div className="city-name">
                    Albuquerque
                </div>
                <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Albuquerque")).map((trail) => (
                            <div key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                            </div>
                        ))
                    }
                </div>
                <div className="city-name">
                    Las Cruces
                </div>
                <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Las Cruces")).map((trail) => (
                            <div key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                            </div>
                        ))
                    }
                </div>
                {/* <div className="city-name">
                    Chaves County
                </div> */}
                {/* <div className="trail-row">
                    {
                        TrailInfo[0].trails.filter((trail) => (trail.city === "Chaves County")).map((trail) => (
                            <div key={trail.id} >
                                <TrailCard name={trail.name} img={trail.thumbURL} />
                            </div>
                        ))
                    }
                </div> */}
            </div>
        </div>
    );

}
export default City;