import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductSingle() {
  const { id } = useParams();

  const urlApiGet = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(urlApiGet)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="container-light">
              <div className="card">
                <img src={product.image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{product.title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-start">
            <div>{product.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
