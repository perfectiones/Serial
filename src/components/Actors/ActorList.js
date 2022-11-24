


function ActorList() {
    const Names = [
        "Pedro Pascal",
        "Bella Ramsey",
        "Gabriel Luna",
        "Nick Offerman",
        " Merle Dandridge",
        "Jeffrey Pierce",
        "Anna Torv",
        " Murray Bartlett"
    ]

    

    return(
        <div>
            {Names.map( (e, index) => 
                <div className="actor__wrapper row">
                    <div className="col-lg-4 col-6">
                        <div className="actor__photo">

                        </div>
                    </div>
                    <div className="col-lg-8 col-6 ">
                        <div className="actor__info">
                            { e }
                        </div>
                    </div>

                </div>
            
            )}
        </div>

    )
}
export default ActorList;