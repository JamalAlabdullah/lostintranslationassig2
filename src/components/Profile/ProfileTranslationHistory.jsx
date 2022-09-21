import { translationClearHistory } from "../../api/translate"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";

const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.slice(0, 10).map((translation, index) => <ProfileTranslationHistoryItem key={ index } translation={ translation }/>)
    const { user, setUser } = useUser()

    const handleDeleteTranslationsClick = async () => {
        
        if (!window.confirm("Are you sure you want to delete your history?")) {
            return
        }

        const [ clearError ] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }
        
        const updatedUser = {
            ...user,
            orders: []
        }
        
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <>
            <div className="card1">
                <div className="card-header">Translation History</div>
                    <div className="card-body">
                        { translationList.length === 0 && <p>You have no translation history!</p>}
                        { translationList.length > 0 && 
                        <ul className="list-group list-group-flush">
                            { translationList }
                        </ul>
                        }
                    </div>
            </div>
            { translationList.length > 0 && 
            <div className="deleteBtn">
                <button type="submit" className="btn btn-primary" onClick={ handleDeleteTranslationsClick }>Delete Translations</button>
            </div>
            }
        </>
    )
}

export default ProfileTranslationHistory