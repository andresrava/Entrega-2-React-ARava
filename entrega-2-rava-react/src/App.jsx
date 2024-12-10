import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "./contexts/ItemsContext";
import { Checkout } from "./components/CartWidget/Checkout"
import {NotFound} from "./components/NotFound/NotFound"

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Nuestros destinos" />} />

          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros destinos de" />} />

          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<NotFound />} />

        </Routes>    
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
