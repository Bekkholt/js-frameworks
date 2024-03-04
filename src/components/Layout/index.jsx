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
        <Route
          index
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route
          path="/src/components/ContactPage"
          element={
            <div>
              <ContactPage />
            </div>
          }
        />
        <Route
          path="/src/components/CheckoutPage"
          element={
            <div>
              <CheckoutPage />
            </div>
          }
        />
      </Routes>
      <main className={styles.myBody}></main>
      <Footer />
    </div>
  );
}
