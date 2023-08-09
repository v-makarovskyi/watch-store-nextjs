import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, dispatch, useDispatch } from "react-redux";
import axiosElement from "../../utils/axios-element";
import DOMPurify from 'isomorphic-dompurify';
import Layout from "../../components/layout/Layout";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import WatchList from "../../components/watchList/WatchList";
import { wrapper } from "../../redux/store";
import styles from "./brand.module.css";
import { fetchSingleBrand, fetchWatchsFromRelatedBrand } from "../../redux/brands/brandsSlice";


export const getServerSideProps = wrapper.getServerSideProps(
    (store) => 
    async ({ query }) => {
        const BrandSlug = query.BrandSlug
        await store.dispatch(fetchSingleBrand(BrandSlug))
        await store.dispatch(fetchWatchsFromRelatedBrand(BrandSlug))
        const { brands } = store.getState()

        return {
            props: {
                brand: brands.server.brand,
                products: brands.server.productsForBrand,
            }
        }
    }
)

export default function Brand({ brand, products }) {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const brandDescriptionData = brand.description
  return (
    <Layout>
      <Head>
        <title>00</title>
      </Head>
      <Row className={styles.brand_container}>
        <Col lg={3} className={styles.right}>
          <Breadcrumb
            style={{ fontSize: "0.8rem", color: "#bab6b6", paddingTop: "2rem" }}
          >
            <Breadcrumb.Item>Головна</Breadcrumb.Item>
            <Breadcrumb.Item>Бренди</Breadcrumb.Item>
            <Breadcrumb.Item>{brand.title}</Breadcrumb.Item>
          </Breadcrumb>
          {/*  man or woman type */}
          <hr />
          <div className={styles.brand_container_properties}>
            <div className={styles.brand_container_properties_top}>
              <h4>Тип годинника</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.brand_container_variants
                  : styles.brand_container_variants_hidden
              }
            >
              <label htmlFor="mantype">
                <input id="mantype" type="checkbox" value="mantype" />
                Чоловічий годинник
              </label>
              <label htmlFor="womantype">
                <input id="womantypetype" type="checkbox" value="womantype" />
                Жіночий годинник
              </label>
            </div>
          </div>

          <hr />
          {/*   brand */}

          <div className={styles.brand_container_properties}>
            <div className={styles.brand_container_properties_top}>
              <h4>Тип годинника</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.brand_container_variants
                  : styles.brand_container_variants_hidden
              }
            >
              <label htmlFor="mantype">
                <input id="mantype" type="checkbox" value="mantype" />
                Чоловічий годинник
              </label>
              <label htmlFor="womantype">
                <input id="womantypetype" type="checkbox" value="womantype" />
                Жіночий годинник
              </label>
            </div>
          </div>


          <hr />

          {/* glass */}

          <div className={styles.brand_container_properties}>
            <div className={styles.brand_container_properties_top}>
              <h4>Скло</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.brand_container_variants
                  : styles.brand_container_variants_hidden
              }
            >
              <label htmlFor="sapfir">
                <input id="sapfir" type="checkbox" value="sapfir" />
                Сапфірове
              </label>
              <label htmlFor="mineral">
                <input id="mineral" type="checkbox" value="mineral" />
                Мінеральне
              </label>
            </div>
          </div>

          <hr />

          {/*  wristband */}

          <div className={styles.brand_container_properties}>
            <div className={styles.brand_container_properties_top}>
              <h4>Браслет</h4>
              {/*    {
                <button onClick={() => setShowProperties(!showProperties)}>
                  {showProperties ? (
                    <i class="bi bi-arrow-up-circle"></i>
                  ) : (
                    <i class="bi bi-arrow-down-circle"></i>
                  )}
                </button>
              } */}
            </div>
            <div
              className={
                showProperties
                  ? styles.brand_container_variants
                  : styles.brand_container_variants_hidden
              }
            >
              <label htmlFor="steel">
                <input id="steel" type="checkbox" value="steel" />
                Нержавіюча сталь
              </label>
              <label htmlFor="leather">
                <input id="leather" type="checkbox" value="leather" />
                Шкіряний (М'який, комфортний)
              </label>
              <label htmlFor="rubber">
                <input id="rubber" type="checkbox" value="rubber" />
                Каучуковий
              </label>
            </div>
          </div>

          <hr />
        </Col>
        <Col lg={9} className={styles.left}>
          <div
            className={styles.brand_sort}
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <span>
              <i class="bi bi-filter-left"></i>
            </span>
          </div>
          <div
            className={
              showSortMenu
                ? styles.brand_sort_dropdown
                : styles.brand_sort_dropdown_hidden
            }
          >
            <ul className={styles.brand_sort_dropdown_list}>
              <li className={styles.brand_sort_dropdown_list_item}>
                <span>Спочатку новіші</span>
              </li>
              <li className={styles.brand_sort_dropdown_list_item}>
                <span>Сортувати по вартості: спочатку дешевші</span>
              </li>
              <li className={styles.brand_sort_dropdown_list_item}>
                <span>Сортувати по вартості: спочатку дорожчі</span>
              </li>
            </ul>
          </div>
          <h2 className={styles.brand_title}>
            Брендові годинники { brand.title }
          </h2>
          <WatchList watchs={products}/>
          <div className={styles.brand_description}>
            <div className={styles.brand_description_img_container}>
              <img src='' />
            </div>
            <div className={styles.brand_description_content}>
              <p className={styles.brand_description_conten_title}>
                Ми офіційний продавець марки { brand.title } в Україні, з
                обслуговуванням клієнтів тільки в офіційних сервісних центрах.
              </p>
              <div className={styles.brand_description_content_body}>
                <p className={styles.brand_description_content_body_img}>
                  <img src={brand.description_image}/>
                </p>
              <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(brandDescriptionData)}}></div> 
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
    );
}
