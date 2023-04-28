import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import ItemLookup from "../components/ItemLookup";
import ItemSearchRedirect from "./ItemSearchRedirect";
import BestiarySearch from "../components/BestiarySearch";
import Timers from "./Timers";
import Faves from "./Faves";
import gelogo from "../assets/gelogo.png"
import jad from "../assets/jad.png"
import astral from "../assets/astral.png"
import watch from "../assets/watch.png"




export default function HomePage() {
    const { user } = useContext(userContext)
    
    //features set to 0 = nothing selected
    //1 = ItemSearch, 2 = BestiarySearch, 3=Timers
    const [features, toggleFeatures] = useState(0)

    return (
        <>
        <div id="liveAlertPlaceholder" />
        <h1 id="general-bg">Welcome to your home page, {user}</h1>
        <div className="d-flex">
            
            <div className="col-2 bg-light-grey text-center">
                <div className="row">
                    <a class="d-inline-flex" href="#">
                    <img id="navIcon" src={gelogo}
                        onClick={(e) => [e.preventDefault(), toggleFeatures(1)]} />
                    </a>

                </div>
                
                <div className="row">
                    <a class="d-inline-flex" href="#">
                    <img id="navIcon" src={jad}
                        onClick={(e) => [e.preventDefault(), toggleFeatures(2)]} />
                    </a>
                </div>
                
                <div className="row">
                    <a class="d-inline-flex" href="#">
                    <img id="navIcon" src={watch}
                        onClick={(e) => [e.preventDefault(), toggleFeatures(3)]} />
                    </a>

                </div>
                
                <div className="row">
                    <a class="d-inline-flex" href="#">
                    <img id="navIcon" src={astral}
                        onClick={(e) => [e.preventDefault(), toggleFeatures(4)]} />
                    </a>

                </div>
            </div>
            <div className="col">
                {(features == 1) ? <div id="general-bg"><ItemSearchRedirect /></div> : <div />
                }
                {(features == 2) ? <div id="general-bg"><BestiarySearch /></div> : <div />
                }
                {(features == 3) ? <div id="general-bg"><Timers /></div> : <div />
                }
                {(features == 4) ? <div id="general-bg"><Faves /></div> : <div />
                }
            </div>
        
        </div>

        </>
    );
}