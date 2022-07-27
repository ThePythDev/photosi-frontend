import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import { getProducts } from "./api/product";
import { loadProducts } from "./redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const products = useStore((store) => store.products);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      dispatch(
        loadProducts({
          products,
        })
      );
    };

    if (!products.isLoaded) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/add/:id" element={<AddProduct />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </Router>
  );
};

export default App;
