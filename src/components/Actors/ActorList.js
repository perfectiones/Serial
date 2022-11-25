


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
        <div className="row actor__wrapper">
            {Names.map( (e, index) => 

                    <div className=" col-lg-3 col-12 item">
                        <div className="actor">
                            <div className="col-12">
                                <div className="actor__photo">

                                </div>
                            </div>
                            <div className="col-12">
                                <div className="actor__info">
                                    { e }
                                </div>
                            </div>
                        </div>

                    </div>

            
            )}
        </div>

    )
}
export default ActorList;