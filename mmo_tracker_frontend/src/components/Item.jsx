import { useEffect, useState } from "react";

export default function Item({item}) {
    const [showDetails, toggleShowDetails] = useState(false)

    useEffect(() => {
        console.log(showDetails)
    }, [showDetails])

    const toggleDetails = () => {
        (showDetails == true) ? toggleShowDetails(false) : toggleShowDetails(true)
    }

    return(
        <>
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