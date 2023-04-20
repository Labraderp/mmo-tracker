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
            <h1>Hello, BestiarySearch!</h1>
            <form onSubmit={(e) => [e.preventDefault(), bestiarySearchOSRS(beastName, setBeastList)]}>
                <input placeholder="Monster Name" onChange={(e) => {setBeastName(e.target.value)}} />
                <button type="submit">Search!</button>
            </form>
            {(beastList == []) ?
                <div /> :
                beastList.map((beast) => <BestiaryData beast={beast} />)
            }
        </div>
        
    )
}