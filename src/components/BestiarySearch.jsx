import { createContext, useEffect, useState } from "react"
import { bestiarySearchOSRS } from "../utilities"
import BestiaryData from "./BestiaryData"

export default function BestiarySearch() {

    const [beastName, setBeastName] = useState(null)
    const [beastList, setBeastList] = useState([])

    useEffect(() => {
        console.log(beastList)
    }, [beastList])    

    return(
        <div>
            <h2>Search for a beast!</h2>
            <div className="container text-center">
            <form onSubmit={(e) => [e.preventDefault(), bestiarySearchOSRS(beastName, setBeastList)]}>
                <input className="form-floating p-2" id="form-field" placeholder="Monster Name" onChange={(e) => {setBeastName(e.target.value)}} />
                <button className="btn btn-primary p-2"type="submit">Search!</button>
            </form>
            </div>
            {(beastList == []) ?
                <div /> :
                beastList.map((beast) => <BestiaryData beast={beast} />)
            }
        </div>
        
    )
}