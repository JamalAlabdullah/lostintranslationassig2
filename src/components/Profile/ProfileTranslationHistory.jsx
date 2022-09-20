import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
  
    const translationList = translations.map(translation => <ProfileTranslationHistoryItem key={ translation } translation={ translation }/>)
  
    return (
        <>


<section>
          
          
          
        </section>
          <div className="card1">
                <div className="card-header">Translation history</div>
                <div className="card-body">
                <p>Here should the result of translation ....</p>
                
            <ul className="list-group list-group-flush">
                { translationList }
            </ul>
           
                
            </div>
            </div>
           <div className="deleteBtn">
            <button type="submit" className="btn btn-primary">Delete Translations</button>
            </div>
        
        </>
      

        
    )
}

export default ProfileTranslationHistory