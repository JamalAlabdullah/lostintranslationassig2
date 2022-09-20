const TranslationButton = ({ word, image }) => {
    return (
        <button>
            <aside>
                <img src={ image } alt={ word } width="55" />
            </aside>
            <section>
                <b>{ word }</b>
            </section>
        </button>
    )
}

export default TranslationButton