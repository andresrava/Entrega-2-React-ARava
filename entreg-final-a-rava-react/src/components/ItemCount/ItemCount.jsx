import Swal from 'sweetalert2'
import { useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";


export const ItemCount = ({ onAdd}) => {
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(null);
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

  const handleChange = () => {
    pastDate = date
  }

  return (
    <div>
      <span>Pasajeros: </span>
      <button onClick={handleDecrease}> - </button>
      <span>{count}</span>
      <button onClick={handleIncrease}> + </button>
      <hr />
      {/* En proceso de crear una funcionalidad que muestre la fecha en el lugar un año antes de la fecha ingresada
      <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha de viaje</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Fecha"
                    name="name"
                    value={date}
                    onChange={handleChange}
                  />
                </Form.Group>
      </Form> */}
      <button onClick={handleAdd} className="btn btn-primary">
        {" "}
        Agregar al carrito{" "}
      </button>
    </div>
  );
};
("");

