import { useState } from "react";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";
import styles from "./layout.module.css";

export const siteTitle = "watch-store-nextjs";


export default function Layout({ children }) {
 
  return (
    <Container fluid className={styles.layout_container}>
      <Head>
        <meta
          name="description"
          content="Online watch store. Developed with NextJS, React and PostgreSQL"
        />
        <meta name="og:title" content={siteTitle} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer/>
    </Container>
  );
}
