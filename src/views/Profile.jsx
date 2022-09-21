import { useEffect } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { findUserById } from "../api/user";
import { storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";


const Profile = () => {

    const { user, setUser } = useUser();

    useEffect(() => {
        const findUser = async () => {
            const [ error, latestUser ] = await findUserById(user.id)
            
            if (error === null) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }

        findUser()
    }, [user.translations])

    return (
        <section>
            <ProfileHeader username={ user.username } />
            <ProfileTranslationHistory translations={ user.translations } />
        </section>
    );
}



export default  withAuth(Profile);