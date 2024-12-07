import { useEffect, useState } from "react";
import ItemList from "./ItemList";
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
    const productsList = [];
    // Traemos la información
   
    getDocs(itemCollection).then
      (snapshot=>{
        snapshot.docs.map(
          docu=>
          {
            const product = docu.data()
            product.id = docu.id;
            productsList.push(product);
          }
        )
        if(idCategory){
          //filtrar los productos
          const newProducts = productsList.filter((producto)=> producto.category === idCategory )
          setProducts(newProducts)
        }else{
          //devolver todos los productos
          setProducts(productsList)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("Finalizo la promesa")
      });
  }, [idCategory]);

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
