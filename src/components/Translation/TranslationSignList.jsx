import TranslationSignListItem from "./TranslationSignListItem"

const TranslationSignList = ({ letters }) => {

    return (
        <ul>
            { letters.map((letter, index) => <TranslationSignListItem letter={ letter } key={ index} />) }
        </ul>
    )
}
export default TranslationSignList;