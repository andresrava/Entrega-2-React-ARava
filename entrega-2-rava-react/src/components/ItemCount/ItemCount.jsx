import Swal from 'sweetalert2'
import { useState } from "react";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";


export const ItemCount = ({ onAdd}) => {
  const [count, setCount] = useState(1);

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

  return (
    <div>
      <span>Pasajeros: </span>
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

