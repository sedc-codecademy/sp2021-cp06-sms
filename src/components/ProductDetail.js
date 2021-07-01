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
            <img src={data.image_url} className="img-fluid rounded-start" alt={data.name + "image"} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text mt-5">{data.description}</p>
              <p className="card-text mt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
