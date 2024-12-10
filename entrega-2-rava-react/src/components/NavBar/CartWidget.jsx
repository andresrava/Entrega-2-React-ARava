import carrito from "/img/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

export const CartWidget = () => {
  const { items } = useContext(ItemsContext);

  // const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalItems = items.length;

  return (
    <>
      <Link to="/checkout">
        <img
          className="imgCarrito"
          src={carrito}
          style={{ width: "30px", height: "auto" }}
        />

        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </>
  );
};

export default CartWidget;


// import { PiShoppingCartSimple } from "react-icons/pi";

// const CartWidget = () => {
//   return (
//     <div className="cartwidget">
//       <PiShoppingCartSimple size={30} />
//       <p>1</p>
//     </div>
//   );
// };
// export default CartWidget;
