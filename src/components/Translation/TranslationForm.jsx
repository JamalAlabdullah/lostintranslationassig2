import { useForm } from "react-hook-form"

const TranslationForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    
    return (
        <>
            <div className="container">
                <h3 className="welcomeMessage"> Welcome to translation page</h3>
                <p className="enterLable"> Enter the word or phrase you want to translate into a sign: </p>
            
                {/*translate felt */}
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <fieldset>
                        <label htmlFor="translation-notes">Input:</label>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Type..." { ...register("translationNotes") } />
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
                            <p className="card-text">Here should the result of translation be shown</p>
                        </div>
                </div>
            </div>
        </>
      


    );

}





export default TranslationForm;