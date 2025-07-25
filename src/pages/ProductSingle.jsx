import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductSingle() {
  const { id } = useParams();
  console.log(id);
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
        <div className="card col-6 mx-auto">
          <img src={product.image} alt="" />
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
