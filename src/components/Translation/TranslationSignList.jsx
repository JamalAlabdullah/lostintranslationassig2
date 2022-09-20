import TranslationSignListItem from "./TranslationSignListItem"

const TranslationSignList = ({ signArr }) => {

    return (
        <ul>
            { signArr.map(sign => <TranslationSignListItem sign={ sign } />) }
        </ul>
    )
}
export default TranslationSignList;