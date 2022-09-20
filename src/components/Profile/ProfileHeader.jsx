const ProfileHeader = ({ username }) => {
    return (
        <header>
            <h4 className="greetMessage">Hello { username }</h4>
        </header>
        )
}

export default ProfileHeader