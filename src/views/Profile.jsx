import withAuth from "../hoc/withAuth";

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



export default  withAuth(Profile);