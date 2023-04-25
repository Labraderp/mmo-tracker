import { useContext, useEffect, useState } from "react";
import { saveItem } from "../utilities";
import { userContext } from "../App";


export default function Item({item}) {
    const { userData } = useContext(userContext)
    const [showDetails, toggleShowDetails] = useState(false)

    useEffect(() => {
        console.log(showDetails)
    }, [showDetails])

    const toggleDetails = () => {
        (showDetails == true) ? toggleShowDetails(false) : toggleShowDetails(true)
    }

    return(
        <>
        <form onSubmit={(e) => [e.preventDefault(), saveItem(item, userData)]}>
            <button type="submit">Add to Favorites</button>
        </form>
        <div className="row" onClick={toggleDetails}>
            <div className="col"><img src={item.icon}/></div>
            <div className="col"><p className="itemName">{item.name}</p></div>
            <div className="col"><p className="itemPrice">{item.current.price} gp each</p></div>
        </div>
        {(showDetails == false) ?
            <div /> :
            <div className="row">
                <div className="row"><p className="itemDescription">"{item.description}"</p></div>
                <div className="col"><p className="itemTrend">Current price trend: {item.today.trend}</p></div>
                <div className="col"><p className="itemTrendPrice">Exchange Trend direction: {item.today.price}</p></div>
            </div>
        
        }
        </>
    );
}