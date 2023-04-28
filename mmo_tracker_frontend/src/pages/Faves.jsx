import { useContext, useEffect, useMemo, useState } from "react";
import { userContext } from "../App";
import { getFaveBeasts, getFaveItems } from "../utilities";
import BestiaryData from "../components/BestiaryData";
import Item from "../components/Item";

export default function Faves() {
    
    const { userData } = useContext(userContext)
    const [beasts, setBeasts] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        const getFaves = async () => {
            await getFaveBeasts(userData, setBeasts)
            await getFaveItems(userData, setItems)
        }
        getFaves()
    }, [])



    return (
        <div>
            <h1>Faves</h1>
            {(beasts == []) ?
                <div /> :
                <div className="container text-center">
                    <h1>Favorited Beasts</h1>
                    <div className="row row-cols-auto">
                        {beasts.map((beast) => <BestiaryData beast={beast}/>)}
                    </div>
                    </div>
            }
            {(items == []) ?
                <div /> :
                <div className="container text-center">
                    <h1>Favorited Items</h1>
                    <div className="row row-cols-auto">
                {items.map((item) => <Item item={item}/>)}
                    </div>
                </div>
            }
        </div>
    )
}