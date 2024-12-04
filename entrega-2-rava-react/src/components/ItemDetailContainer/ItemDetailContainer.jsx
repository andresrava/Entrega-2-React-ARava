import { useState, useEffect } from "react"
import getProducts from "../../data/getProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import useFetch from "../../customHooks/useFetch";
import {doc,getDoc,getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { idProduct } = useParams()
  const db = getFirestore();

  useEffect(()=>{

    // Creo la referencia al elemento
    const itemRef = doc(db,"items", idProduct);

    // traigo el elemento

    getDoc(itemRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setProduct(snapshot.data())
    })
    .catch((error)=> console.log(error))
   }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}
export default ItemDetailContainer