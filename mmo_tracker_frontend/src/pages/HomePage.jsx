import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import ItemLookup from "../components/ItemLookup";
import ItemSearchRedirect from "./ItemSearchRedirect";
import BestiarySearch from "../components/BestiarySearch";
import Timers from "./Timers";



export default function HomePage() {
    const { user } = useContext(userContext)

    const [isToggle, setISToggle] = useState(true)
    const [otherToggle, setOtherToggle] = useState(true)
    return (
        <div>
            <h1>You are now logged in, {user}</h1>
            {(isToggle) ? 
                <img src="https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg"
                onClick={(e) => [e.preventDefault(), setISToggle(false), setOtherToggle(true)]}></img> :
                <ItemSearchRedirect />
            }
            {(otherToggle) ?
                <img src="https://pbs.twimg.com/profile_images/1551544340195024902/cHOOs7HW_400x400.jpg"
                onClick={(e) => [e.preventDefault(), setOtherToggle(false), setISToggle(true)]}></img> :
                <BestiarySearch />

            }
            <Timers />
        </div>
    );
}