import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translation = () => {

    return (
        <>
            <TranslationForm/>
        </>
   
    
    );
}



export default withAuth(Translation);