const TranslationForm = () => {




    return (
        <>
            <div className="container">
          <h3 className="welcomeMessage"> Welcome to translation page</h3>
          <p className="enterLable">Enter the word or phrase you want to translate into a sign: </p>
            
             {/*translate felt */}
          <div className="input-group mb-3">
           <input type="text" className="form-control" placeholder="Type..."
            />
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button">Translate</button>
            </div>
          </div>

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