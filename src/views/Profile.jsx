import ProfileAction from "../components/Profile/ProfileAction";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";


const Profile = () => {

    const { user } = useUser();
    return (
        <section>
          
            
            <ProfileHeader username={ user.username } />
            <ProfileAction />
            <ProfileTranslationHistory translations={ user.translations } />
        </section>
    );
}



export default  withAuth(Profile);