import Swal from 'sweetalert2'
import { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";


export const ItemCount = ({ onAdd}) => {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(ItemsContext);

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
      setCount((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  // const handleAdd = (count) => {
  //   addItem({ id: itemId, quantity: count });
  //   console.log("Acá el id y el count son: ");
  //   console.log(itemId)
  //   console.log(count)
  //   console.log("Terminé")
    
  //   Swal.fire("Guardado en el carrito!", `Cantidad: ${count}`, "success");
  //   setCount(1);
  // };

  return (
    <div>
      <button onClick={handleDecrease}> - </button>
      <span>{count}</span>
      <button onClick={handleIncrease}> + </button>
      <hr />
      <button onClick={handleAdd} className="btn btn-primary">
        {" "}
        Agregar al carrito{" "}
      </button>
    </div>
  );
};
("");

