import { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import ItemLookup from "../components/ItemLookup";



export default function HomePage() {
    const { user } = useContext(userContext)

    return (
        <div>
            <h1>You are now logged in, {user}</h1>
            <ItemLookup />
        </div>
    );
}