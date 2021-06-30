import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await response.json();
    console.log("call")
    setData(data[0]);
  };

  return (
    <div className="container">

          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={data.image_url} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.description}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      );
};
      export default ProductDetail;
