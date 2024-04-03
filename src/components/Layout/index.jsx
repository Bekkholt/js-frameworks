import styles from "./index.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../../Pages/ContactPage";
import CheckoutPage from "../../Pages/CheckoutPage";
import HomePage from "../../Pages/HomePage";
import ProductPage from "../../Pages/ProductPage";
import CheckoutSuccessPage from "../../Pages/CheckoutSuccessPage";
import { useReducer } from "react";

function reducer(state, action) {
  let inCart;
  let productIndex;
  let newTotal;

  switch (action.type) {
    case "add":
      inCart = [...state.inCart];
      inCart.push(action.productDetails);
      newTotal = state.total + action.productDetails.discountedPrice;
      return { count: state.count + 1, inCart: inCart, total: newTotal };
    case "remove":
      productIndex = state.inCart.findIndex(
        (product) => product.id === action.id
      );
      const cartItem = state.inCart[productIndex];
      const itemPrice = cartItem.discountedPrice;
      newTotal = state.total - itemPrice;
      inCart = [...state.inCart];
      if (productIndex !== -1) {
        inCart.splice(productIndex, 1);
      }
      return { count: state.count - 1, inCart: inCart, total: newTotal };
    case "reset":
      return { count: 0, inCart: [], total: 0 };
    default:
      throw new Error();
  }
}

const initialState = { count: 0, inCart: [], total: 0 };

export default function Layout() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.pageWrapper}>
      <Header count={state.count} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Pages/ContactPage" element={<ContactPage />} />
        <Route
          path="/Pages/CheckoutPage"
          element={
            <CheckoutPage
              inCart={state}
              reset={() => dispatch({ type: "reset" })}
              remove={(action) => dispatch(action)}
            />
          }
        />

        <Route
          path="/Pages/ProductPage/:id"
          element={<ProductPage addToCart={(action) => dispatch(action)} />}
        />
        <Route
          path="/Pages/CheckoutSuccessPage"
          element={<CheckoutSuccessPage />}
        />
      </Routes>
      <main className={styles.myBody}></main>
      <Footer />
    </div>
  );
}
