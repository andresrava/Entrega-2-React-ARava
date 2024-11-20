import useFetch from "../../customHooks/useFetch";
import ReportFetcher from "../WeatherReport/WeatherReport";

const ItemDetail = ({ product }) => {

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <ReportFetcher product = {product} />
    </div>
  )
}
export default ItemDetail