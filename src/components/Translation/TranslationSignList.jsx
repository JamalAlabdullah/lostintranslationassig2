import TranslationSignListItem from "./TranslationSignListItem"

const TranslationSignList = ({ letters }) => {

    return (
        <ul>
            { letters.map(letter => <TranslationSignListItem letter={ letter } />) }
        </ul>
    )
}
export default TranslationSignList;