import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";
import TranslationButton from "../components/Translation/TranslationButton";

const Translation = () => {

    return (
        <>
            <TranslationForm/>
        </>
   
    
    );
}



export default withAuth(Translation);