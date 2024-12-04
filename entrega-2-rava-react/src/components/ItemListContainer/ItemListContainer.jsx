import { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import { collection, getDocs,getFirestore } from "firebase/firestore"
import "./itemListContainer.css"

const ItemListContainer = ({ saludo }) => {

  const [products, setProducts] = useState([]);

  const { idCategory } = useParams()
  useEffect(() => {
    const db = getFirestore();

    // Creamos la referencia a la coleccion

    const itemCollection = collection(db,"items")

    // Traemos la información

    getDocs(itemCollection).then
    (snapshot=>{
      setProducts([])
        snapshot.docs.map(
          docu=>
          {
            const product = docu.data()
            product.id = docu.id;
            products.push(product);
          }
        )
        if(idCategory){
          //filtrar los productos
          const newProducts = products.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          console.log("Entré al else")
          //devolver todos los productos
          setProducts(products)
        }
      })
    .catch((error) => console.log(error))
    .finally(() => {
      console.log("Finalizo la promesa")
      console.log("Ahora en el finally products es: ")
      console.log(products)
    });
}, [idCategory]);

console.log( "Ahora products es: "  )
console.log(products)

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <h1>{idCategory}</h1>
      <ItemList products={products} />
    </div>
  );

}
;
export default ItemListContainer;
