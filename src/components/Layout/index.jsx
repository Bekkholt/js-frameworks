import styles from "./index.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../../Pages/ContactPage";
import CheckoutPage from "../../Pages/CheckoutPage";
import HomePage from "../../Pages/HomePage";

export default function Layout() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/src/components/ContactPage" element={<ContactPage />} />
        <Route path="/src/components/CheckoutPage" element={<CheckoutPage />} />
        <Route path="*" element={<ProductPage />} />
      </Routes>
      <main className={styles.myBody}></main>
      <Footer />
    </div>
  );
}
