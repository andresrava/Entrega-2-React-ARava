import ReportFetcher from "../WeatherReport/WeatherReport";

const ItemDetail = ({ product }) => {

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      {/* ReportFetcher se encarga de traer el clima actual del destino en el detalle */}
      <ReportFetcher product = {product} />
    </div>
  )
}
export default ItemDetail