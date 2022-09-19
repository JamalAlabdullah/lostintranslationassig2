import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
  
    const translationList = translations.map(translation => <ProfileTranslationHistoryItem key={ translation } translation={ translation }/>)
  
    return (
        <section>
            <h4>Translation history</h4>
            <ul>
                { translationList }
            </ul>
        </section>
    )
}

export default ProfileTranslationHistory