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
        <h2>Search for an item!</h2>
        <form onSubmit={(e) => [e.preventDefault(), setPageNum(1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum, maxFlag)]}>
            <input className="form-floating p-2" placeholder="Item Name" onChange={(e) => {setItemName(e.target.value), setMaxFlag(0)}} />
            <button className="btn btn-primary p-2" type="submit">Search!</button>
        </form>
        </itemContext.Provider>
        <div className="container text-center">
            <div className="row p-2">
                <div className="col">
                    <button className="btn btn-primary p-2" disabled={pageNum == 1}
                    onClick={(e) => [e.preventDefault(), setPageNum(pageNum-1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum-1, maxFlag)]}>Previous Page</button>
                </div>
                <div className="col">
                    <p>Current Page: {pageNum}</p>
                </div>
                
                <div className="col">
                    <button className="btn btn-primary p-2" disabled={pageNum == maxPages} 
                    onClick={(e) => [e.preventDefault(), setPageNum(pageNum+1), itemSearchOSRS(itemName, setItems, setMaxPages, setMaxFlag, pageNum+1, maxFlag)]}>Next Page</button>
                </div>
            </div>
        </div>
        
        <div> {
            
        (items.length == 0) ? 
            <div /> :
            <div className="container text-center">
                <div className="row row-cols-auto">
                    { items.map((item) => <div className="col"><Item item={item}/></div>) }
                </div>
            </div>

        } </div>
        </>
    );
}