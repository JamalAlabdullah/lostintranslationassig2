import { useForm } from "react-hook-form"
import { useState } from "react";
import { useUser } from "../../context/UserContext"
import { translationAdd } from "../../api/translate"
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import TranslationSignList from "./TranslationSignList"

const TranslationForm = () => {
    const [ letterArr, setLetterArr ] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()

    const onSubmit = async ({ toBeTranslated }) => {
        
        // manage local state and API state
        const [error, updatedUser] = await translationAdd(user, toBeTranslated)

        if (error !== null)  {
            return
        }

        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);

        // parse and manage user input
        let arr = []
        for (let i = 0; i < toBeTranslated.length; i++) {
            const letter = toBeTranslated[i];
            arr.push(letter)
        }

        setLetterArr(arr);
    }
    
    return (
        <>
            <div className="container">
                <h3 className="welcomeMessage"> Welcome to translation page</h3>
                <p className="enterLable"> Enter the word or phrase you want to translate into sign: </p>
            
                {/*translate field */}
                <form onSubmit={ handleSubmit(onSubmit) } >
                    <fieldset>
                        <label htmlFor="translation-notes">Input:</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Type..." { ...register("toBeTranslated") } />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit">Translate</button>
                            </div>
                        </div>
                    </fieldset>
                </form>

                {/*Results card */}
                <div className="card">
                    <div className="card-header">The results for your translation</div>
                        <div className="card-body">
                            <TranslationSignList letters={ letterArr }/>
                        </div>
                </div>
            </div>
        </>
    );
}

export default TranslationForm;