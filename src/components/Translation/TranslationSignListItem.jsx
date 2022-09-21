const TranslationSignListItem = ({ letter }) => {
    
    return (
        <>
            { letter !== " .png" && <img src={ `Images/${letter}.png` } alt={ `${letter}` } width="40" />}
            { letter === " .png" && " " }
        </>
    )
}
export default TranslationSignListItem;