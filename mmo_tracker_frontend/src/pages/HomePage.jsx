import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import ItemLookup from "../components/ItemLookup";
import ItemSearchRedirect from "./ItemSearchRedirect";
import BestiarySearch from "../components/BestiarySearch";
import Timers from "./Timers";



export default function HomePage() {
    const { user } = useContext(userContext)
    
    //features set to 0 = nothing selected
    //1 = ItemSearch, 2 = BestiarySearch, 3=Timers
    const [features, toggleFeatures] = useState(0)

    return (
        <>
        <h1>You are now logged in, {user}</h1>
        <div>
        <img id="navIcon" src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
                onClick={(e) => [e.preventDefault(), toggleFeatures(1)]}></img>

        <img id="navIcon" src="https://pbs.twimg.com/profile_images/1551544340195024902/cHOOs7HW_400x400.jpg"
                onClick={(e) => [e.preventDefault(), toggleFeatures(2)]}></img>

        <img id="navIcon" src="https://pbs.twimg.com/profile_images/1363102745528565761/4Ox26Ynw_400x400.png"
                onClick={(e) => [e.preventDefault(), toggleFeatures(3)]}></img>

        <img id="navIcon" src="https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_400x400.jpg"
                onClick={(e) => [e.preventDefault(), toggleFeatures(4)]}></img>

        </div>
        <div>
            {(features == 1) ? <ItemSearchRedirect /> : <div />
            }
            {(features == 2) ? <BestiarySearch /> : <div />
            }
            {(features == 3) ? <Timers /> : <div />
            }
            {(features == 4) ? <Timers /> : <div />
            }
        </div>
        </>
    );
}