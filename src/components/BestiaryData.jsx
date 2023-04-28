import { useContext, useEffect, useState } from "react";
import { bestiaryResolve, saveBeast } from "../utilities";
import { userContext } from "../App";

export default function BestiaryData({beast}) {

    const { userData } = useContext(userContext)

    const [beastID, setBeastID] = useState(beast.value)
    const [divID, setDivID] = useState("")
    const [beastName, setBeastName] = useState("")
    const [beastDesc, setBeastDesc] = useState("")
    const [toggleClicked, setToggleClicked] = useState(false)

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

    useEffect(() => {
        getRandomDivID()
    }, [])

    const getRandomDivID = () => {
        let result = '';
        let counter = 0;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length
        
        while (counter < 20) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
          }

        setDivID(result)

    }

    return(
        <div class="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header" onClick={(e) => [e.preventDefault(), setToggleClicked(!toggleClicked)]}>
                <button class="accordion-button" id="general-bg" type="button" data-bs-toggle="collapse" data-bs-target={'#'+divID} aria-expanded="true" aria-controls={divID}>
                    {beast.label}
                </button>
                </h2>
                <div id={divID} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body" id="general-bg">
                    <p>{beastName} - {beastDesc}</p>
                    <button className="btn btn-primary" onClick={(e) => [e.preventDefault(), saveBeast(beast, userData)]}>⭐</button>

                </div>
                </div>
            </div>
        </div>

    );

    // return (
    //     <div>
    //         <form onSubmit={(e) => [e.preventDefault(), saveBeast(beast, userData)]}>
    //             <button type="submit">Toggle Fave</button>
    //         </form>
    //         <h3 onClick={(e) => [e.preventDefault(), setToggleClicked(!toggleClicked)]}>{beast.label}</h3>
    //         {(toggleClicked == true) ?
    //             <div>
    //                 <p>{beastName} - {beastDesc}</p>
    //             </div> :
    //             <div />
    //         }
    //     </div>
    // );
}