import useFetch from "../../customHooks/useFetch";
import WeatherReport from "../WeatherReport/WeatherReport";

const ItemDetail = ({ product }) => {

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <div>El día hoy en {product.city} : <WeatherReport product = {product} /></div>
    </div>
  )
}
export default ItemDetail