import React from "react";
import { useParams, Link } from "react-router-dom";

function BuyOrder() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col text-center">
          <div className="alert alert-warning" role="alert">
            <h1>Gracias por tu compra!</h1>
          </div>
          <Link to={"/"} className="btn btn-primary">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyOrder;
