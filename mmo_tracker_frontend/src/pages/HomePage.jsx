<<<<<<< HEAD
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
=======
import { useState } from "react";


export default function HomePage() {

    const [user, setUser] = useState(null)


    return (
        <h1>Homepage</h1>
>>>>>>> main
    );
}