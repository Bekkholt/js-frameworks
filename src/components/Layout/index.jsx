import styles from "./index.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../../Pages/ContactPage";
import CheckoutPage from "../../Pages/CheckoutPage";
import HomePage from "../../Pages/HomePage";
import ProductPage from "../../Pages/ProductPage";

export default function Layout() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Pages/ContactPage" element={<ContactPage />} />
        <Route path="/Pages/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/Pages/ProductPage/:id" element={<ProductPage />} />
      </Routes>
      <main className={styles.myBody}></main>
      <Footer />
    </div>
  );
}
