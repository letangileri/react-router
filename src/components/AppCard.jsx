export default function AppCard({prodotto}){

    return(
        <section>
    <div className="container">
        <div className="row row-cols1 row-cols-md2 row-cols-lg3 g-3">
            <div key = {prodotto.id} className="col">
            <div className="card h-100" >
                <div className="card-img-top">
                    <img src={prodotto.image} alt="" /> 
                </div>
                <div className="card-body">
                    <h3>{prodotto.title}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                <span>
                <strong> {prodotto.price} €</strong>
                </span>
                </div>
            </div>
        </div>
        </div>
            
    </div>

    </div>
</section>


    )
}