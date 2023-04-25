import { useContext, useEffect, useState } from "react";
import { bestiaryResolve, saveBeast } from "../utilities";
import { userContext } from "../App";

export default function BestiaryData({beast}) {

    const { userData } = useContext(userContext)

    const [beastID, setBeastID] = useState(beast.value)
    const [beastName, setBeastName] = useState("")
    const [beastDesc, setBeastDesc] = useState("")
    const [toggleClicked, setToggleClicked] = useState(false)

    // const getBeastData = async () => {
    //     const data = await bestiaryResolve(beastID)
    //     setBeastName(data.name)
    //     setBeastData(data)
    // }

    useEffect(() => {
        if(toggleClicked) {
            const getBeastData = async () => {
                const data = await bestiaryResolve(beastID)
                setBeastName(data.name)
                setBeastDesc(data.description)
            }

            getBeastData()
        }
        console.log(toggleClicked)
    }, [toggleClicked])

    return (
        <div>
            <form onSubmit={(e) => [e.preventDefault(), saveBeast(beast, userData)]}>
                <button type="submit">Add to Favorites</button>
            </form>
            <h3 onClick={(e) => [e.preventDefault(), setToggleClicked(!toggleClicked)]}>{beast.label}</h3>
            {(toggleClicked == true) ?
                <div>
                    <p>{beastName} - {beastDesc}</p>
                </div> :
                <div />
            }
        </div>
    );
}