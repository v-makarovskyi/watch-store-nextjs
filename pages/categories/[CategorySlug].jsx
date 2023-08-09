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
import { fetchSingleCategory, fetchWatchsFromRelatedCategory } from "../../redux/categories/categoriesReduser";
import styles from "./category.module.css";
import { categoryDetails } from "../../redux/categories/categoriesReduser";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => 
    async({ query }) => {
      const CategorySlug = query.CategorySlug
      console.log(CategorySlug)
      await store.dispatch(fetchSingleCategory(CategorySlug))
      await store.dispatch(fetchWatchsFromRelatedCategory(CategorySlug)) 
      const { categories } = store.getState()

      return {
        props: {
          category: categories.server.category,
          products: categories.server.productsForCategory,
          
        }
      }
    }
)

export default function Category({category, products}) {

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const categoryDescriptionData = category.description
  
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
      </Head>
      <Row className={styles.category_container}>
        <Col lg={3} className={styles.right}>
          <Breadcrumb
            style={{ fontSize: "0.8rem", color: "#bab6b6", paddingTop: "2rem" }}
          >
            <Breadcrumb.Item>Головна</Breadcrumb.Item>
            <Breadcrumb.Item>{category.name}</Breadcrumb.Item>
          </Breadcrumb>
          {/*  man or woman type */}
          <hr />
          <div className={styles.category_container_properties}>
            <div className={styles.category_container_properties_top}>
              <h4>Тип годинника</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.category_container_variants
                  : styles.category_container_variants_hidden
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

          <div className={styles.category_container_properties}>
            <div className={styles.category_container_properties_top}>
              <h4>Бренд</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.category_container_variants
                  : styles.category_container_variants_hidden
              }
            >
              <label htmlFor="TISSOT">
                <input id="TISSOT" type="checkbox" value="TISSOT" />
                TISSOT
              </label>
              <label htmlFor="ATLANTIC">
                <input id="ATLANTIC" type="checkbox" value="ATLANTIC" />
                ATLANTIC
              </label>
              <label htmlFor="CASIO">
                <input id="CASIO" type="checkbox" value="CASIO" />
                CASIO
              </label>
              <label htmlFor="HAMILTON">
                <input id="HAMILTON" type="checkbox" value="HAMILTON" />
                HAMILTON
              </label>
              <label htmlFor="SEIKO">
                <input id="SEIKO" type="checkbox" value="SEIKO" />
                SEIKO
              </label>
              <label htmlFor="LONGINES">
                <input id="LONGINES" type="checkbox" value="LONGINES" />
                LONGINES
              </label>
            </div>
          </div>

          <hr />

          {/* glass */}

          <div className={styles.category_container_properties}>
            <div className={styles.category_container_properties_top}>
              <h4>Скло</h4>
            </div>
            <div
              className={
                showProperties
                  ? styles.category_container_variants
                  : styles.category_container_variants_hidden
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

          <div className={styles.category_container_properties}>
            <div className={styles.category_container_properties_top}>
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
                  ? styles.category_container_variants
                  : styles.category_container_variants_hidden
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
            className={styles.category_sort}
            onClick={() => setShowSortMenu(!showSortMenu)}
          >
            <span>
              <i class="bi bi-filter-left"></i>
            </span>
          </div>
          <div
            className={
              showSortMenu
                ? styles.category_sort_dropdown
                : styles.category_sort_dropdown_hidden
            }
          >
            <ul className={styles.category_sort_dropdown_list}>
              <li className={styles.category_sort_dropdown_list_item}>
                <span>Спочатку новіші</span>
              </li>
              <li className={styles.category_sort_dropdown_list_item}>
                <span>Сортувати по вартості: спочатку дешевші</span>
              </li>
              <li className={styles.category_sort_dropdown_list_item}>
                <span>Сортувати по вартості: спочатку дорожчі</span>
              </li>
            </ul>
          </div>
          <h2 className={styles.category_title}>
            Брендові годинники {category.name}
          </h2>
          <WatchList watchs={products}/>
          <div className={styles.category_description}>
            {/* <div className={styles.category_description_img_container}>
              <img src={category.brand_image} />
            </div> */}
            <div className={styles.category_description_content}>
             {/*  <p className={styles.category_description_conten_title}>
                Ми офіційний продавець марки {category.name} в Україні, з
                обслуговуванням клієнтів тільки в офіційних сервісних центрах.
              </p> */}
              <div className={styles.category_description_content_body}>
               <p className={styles.category_description_content_body_img}>
                  <img src={category.description_image}/>
                </p> 
                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(categoryDescriptionData)}}></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
    );
}
