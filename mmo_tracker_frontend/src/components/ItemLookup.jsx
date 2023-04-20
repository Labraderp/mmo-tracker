import { createContext, useEffect, useState } from "react";
import { itemSearchOSRS } from "../utilities";
import Item from "./Item";

export const itemContext = createContext(null)

export default function ItemLookup() {
    const [itemName, setItemName] = useState('')
    const [items, setItems] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const [maxFlag, setMaxFlag] = useState(0)

    useEffect(() => {
        const showItems = async () => {
            console.log(items)
            console.log(maxPages)
            console.log(pageNum)
        }
        showItems()
    }, [items, pageNum, maxPages])

    return (
        <>
        <itemContext.Provider value={{items, setItems, setMaxPages, setMaxFlag, pageNum, maxFlag}}>
        <form onSubmit={(e) => [e.preventDefault(), setPageNum(1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum, maxFlag)]}>
            <input placeholder="Item Name" onChange={(e) => {setItemName(e.target.value), setMaxFlag(0)}} />
            <button type="submit">Search!</button>
        </form>
        </itemContext.Provider>
        <button disabled={pageNum == maxPages} 
            onClick={(e) => [e.preventDefault(), setPageNum(pageNum+1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum+1, maxFlag)]}>Next Page</button>
        <p>Current Page: {pageNum}</p>
        <button disabled={pageNum == 1}
            onClick={(e) => [e.preventDefault(), setPageNum(pageNum-1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum-1, maxFlag)]}>Previous Page</button>
        <div>
        {
        (items.length == 0) ? 
            <div><p>Nothing matched your search</p></div> :
            items.map((item) => <Item item={item}/>)
        }
        </div>
        </>
    );
}