import { useContext, useEffect, useState } from "react";
import { bestiaryResolve } from "../utilities";

export default function BestiaryData({beast}) {

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