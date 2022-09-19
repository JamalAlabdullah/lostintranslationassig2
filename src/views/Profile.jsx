import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileAction from "../components/Profile/ProfileAction";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";

const Profile = () => {

    const { user } = useUser()
    return (
        <section>
            <h1>Profile Page</h1>
            <ProfileHeader username={ user.username } />
            <ProfileAction />
            <ProfileTranslationHistory translations={ user.translations } />
        </section>
    );
}



export default Profile;