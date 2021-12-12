import { auth } from '../services/firebase';
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "@firebase/auth";

export const useAuth = () => {
    const [currUser, setCurrUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async user => setCurrUser(user));

        return unsub;
    }, [currUser])

    return currUser
}
