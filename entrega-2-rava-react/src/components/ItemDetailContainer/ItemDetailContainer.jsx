import { useState, useEffect, useContext } from "react"
import ItemDetail from "./ItemDetail"
import {ItemCount} from "../ItemCount/ItemCount"
import { ItemsContext } from "../../contexts/ItemsContext";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom"
import {doc,getDoc,getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addItem } = useContext(ItemsContext);

  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true);

  const { idProduct } = useParams()
  
  const db = getFirestore();

  useEffect(()=>{

    // Creo la referencia al elemento
    const itemRef = doc(db,"items", idProduct);

    // traigo el elemento

    getDoc(itemRef).then(snapshot=>{
      console.log(snapshot);
      console.log(snapshot.data());
      setItem({ id: snapshot.id, ...snapshot.data() });
    })
    .catch((error)=> console.log(error))
    .finally(() => setLoading(false))
   }, [idProduct])


  const onAdd = (count) => {
    Swal.fire("Guardado en el carrito!");
    addItem({data: item, quantity: count});
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!item) {
    return <h5>Item not found</h5>;
  }

  return (
    <>
      <ItemDetail product={item} />
      <ItemCount onAdd={onAdd}/>
    </>
    
  )
}
export default ItemDetailContainer