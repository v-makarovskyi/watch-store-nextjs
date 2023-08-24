import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import { useParams, usePathname, useSearchParams } from "next/navigation";

import DOMPurify from "isomorphic-dompurify";
import Layout from "../../components/layout/Layout";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import WatchList from "../../components/watchList/WatchList";
import FilterProperties from "../../components/shop/shop-filters/FilterProperties";

import Sort from "../../components/shop/sort-block/Sort";
import ErrorMsg from "../../components/common/errorMsg/ErrorMsg";

import { wrapper } from "../../redux/store";
import {
  getBrand,
  getRunningQueriesThunk,
  useGetBrandQuery,
  getBrandListWatch,
  useGetBrandListWatchQuery,
} from "../../redux/watchsApi";
import styles from "./brand.module.css";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const brandSlug = context.query.brandSlug;
   store.dispatch(getBrand.initiate(brandSlug));
    store.dispatch(
      getBrandListWatch.initiate({ slug: brandSlug, queryParams: {} })
    );
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        query: context.query,
      },
    };
  }
);

export default function Brand({ query }) {
  const brandSlug = query.brandSlug;
  const queryParams = {};
  if (query.watch_type) {
    queryParams["watch_type"] = query.watch_type;
  }
  if (query.glass) {
    queryParams["glass"] = query.glass;
  }
  if (query.wristband) {
    queryParams["wristband"] = query.wristband;
  }
  if (query.color) {
    queryParams["color"] = query.color
  }

  const { data: brand } = useGetBrandQuery(brandSlug);

  const {
    data: watchs,
    isLoading,
    isError,
  } = useGetBrandListWatchQuery({ slug: brandSlug, queryParams });

  const activeSortType = useSelector((state) => state.sort.sortBy.type);

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!isLoading && !isError && watchs?.length > 0) {
      const maxPrice = watchs.reduce((acc, watch) => {
        return watch.price > acc ? watch.price : acc;
      }, 0);
      setPriceValue([0, maxPrice]);
    }
  }, [isLoading, isError, watchs]);

  //for PriceFilter component
  function handleChanges(val) {
   /*  setCurrentPage(1); */
    setPriceValue(val);
  }
  let content = null;

  if (!isLoading && isError) {
    content = <ErrorMsg message="Произошла ошибка! Попробуйте еще раз!" />;
  }
  if (!isLoading && !isError && watchs?.length === 0) {
    content = <ErrorMsg message="Товары по данному запросу не найдены!" />;
  }

  if (!isLoading && !isError && watchs?.length > 0) {
    let watch_items = watchs;
    if (activeSortType) {
      if (activeSortType === "new") {
        const newWatchItems = [...watch_items];
        watch_items = newWatchItems.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      }
      if (activeSortType === "asc") {
        const newWatchItems = [...watch_items];
        watch_items = newWatchItems.sort((a, b) => a.price - b.price);
      }
      if (activeSortType === "desc") {
        watch_items.slice().sort((a, b) => b.price - a.price);
      }
      if (activeSortType === "discount") {
        watch_items = watch_items.filter((w) => w.discount > 0);
      }
    }
    //price filter
    watch_items = watch_items.filter(
      (w) => w.price >= priceValue[0] && w.price <= priceValue[1]
    );

    content = <WatchList watchs={watch_items} brandPage />;
  }

  return (
    <Layout>
      <Head>
        <title>{brand?.title}</title>
      </Head>
      <Row className={styles.brand_container}>
        <Col lg={3} className={styles.right}>
          <Breadcrumb
            style={{ fontSize: "0.8rem", color: "#bab6b6", paddingTop: "2rem" }}
          >
            <Breadcrumb.Item>Головна</Breadcrumb.Item>
            <Breadcrumb.Item>Бренди</Breadcrumb.Item>
            <Breadcrumb.Item>{brand?.title}</Breadcrumb.Item>
          </Breadcrumb>

          <FilterProperties 
            showProperties={showProperties} 
            brandPage 
            onHandleChanges={handleChanges}
            priceValue={priceValue}
            watchs={watchs}
          />
        </Col>
        <Col lg={9} className={styles.left}>
          <Sort
            showSortMenu={showSortMenu}
            setShowSortMenu={setShowSortMenu}
            activeSortType={activeSortType}
          />
          <h2 className={styles.brand_title}>
            Брендові годинники {brand?.title}
          </h2>

          {content}

          <div className={styles.brand_description}>
            <div className={styles.brand_description_img_container}>
              <img src={brand?.brand_image} />
            </div>
            <div className={styles.brand_description_content}>
              <p className={styles.brand_description_conten_title}>
                Ми офіційний продавець марки {brand?.title} в Україні, з
                обслуговуванням клієнтів тільки в офіційних сервісних центрах.
              </p>
              <div className={styles.brand_description_content_body}>
                <p className={styles.brand_description_content_body_img}>
                  <img src={brand?.description_image} />
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(brand?.description),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

