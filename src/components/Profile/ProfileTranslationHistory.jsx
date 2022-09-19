import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
  
    const translationList = translations.map(translation => <ProfileTranslationHistoryItem key={ translation } translation={ translation }/>)
  
    return (
        <section>
            <h4>Translation history</h4>
            <ul className="list-group list-group-flush">
                { translationList }
            </ul>
            <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
        </section>
    )
}

export default ProfileTranslationHistory