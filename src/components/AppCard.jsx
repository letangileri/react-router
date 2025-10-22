export default function AppCard({ prodotto }) {
  return (
    <div className="col">
      <div className="card h-100">
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
  );
}
