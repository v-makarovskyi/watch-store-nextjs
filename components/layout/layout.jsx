import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, get_cart_items } from "../../redux/cartSlice";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import styles from "./layout.module.scss";

export const siteTitle = "watch-store-nextjs";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(get_cart_items());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Online watch store. Developed with NextJS, React and PostgreSQL"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <ToastContainer />
      <main>{children && children}</main>
      <Footer />
    </div>
  );
}
