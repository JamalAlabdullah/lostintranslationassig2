const ProfileHeader = ({ username }) => {
    return (
        <header>
            <h4 className="greetMessage animate__animated animate__zoomIn">Hello { username }</h4>
        </header>
        )
}

export default ProfileHeader