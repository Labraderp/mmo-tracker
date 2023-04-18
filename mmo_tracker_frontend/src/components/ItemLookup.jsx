import { createContext, useEffect, useState } from "react";
import { itemSearchOSRS } from "../utilities";

export const itemContext = createContext(null)

export default function ItemLookup() {
    const [itemName, setItemName] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        const showItems = async () => {
            console.log(items)
        }
        showItems()
    }, [items])

    return (
        <>
        <itemContext.Provider value={{items, setItems}}>
        <form onSubmit={(e) => [e.preventDefault(), itemSearchOSRS(itemName, setItems)]}>
            <input placeholder="Item Name" onChange={(e) => {setItemName(e.target.value)}} />
            <button type="submit">Search!</button>
        </form>
        </itemContext.Provider>
        <div>
            {items.map((item) => 
            <div>
                <h1>{item.name}</h1>
                <h3>{item.current.price} gp each</h3>
                <img src={item.icon}/>
            </div>)}
        </div>
        </>
    );
}