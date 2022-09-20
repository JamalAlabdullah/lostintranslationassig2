const TranslationSignListItem = ({ sign }) => {
    console.log(sign)

    return (
        <>
            { sign !== " .png" && <img src={ `Images/${sign}` } alt={ `${sign}` } width="40" />}
            { sign === " .png" && " " }
        </>
    )
}
export default TranslationSignListItem;