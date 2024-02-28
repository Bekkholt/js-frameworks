import styles from "./index.module.css";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.myBody}></main>
      <Footer />
    </div>
  );
}
