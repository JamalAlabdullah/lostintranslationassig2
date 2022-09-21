import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { useEffect } from "react";

const Logout = () => {
    const { user, setUser } = useUser()

    if (window.confirm("Are you sure you want to log out?")) {
        storageSave(STORAGE_KEY_USER, null)
        setUser(null)
        window.location = "/"
    }
}


    
export default Logout;