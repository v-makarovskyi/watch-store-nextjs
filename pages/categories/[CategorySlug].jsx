import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import DOMPurify from "isomorphic-dompurify";
import Layout from "../../components/layout/Layout";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import WatchList from "../../components/watchList/WatchList";
import FilterProperties from "../../components/shop/shop-filters/FilterProperties";
import { wrapper } from "../../redux/store";
import Sort from "../../components/shop/sort-block/Sort";
import ErrorMsg from "../../components/common/errorMsg/ErrorMsg";
import { useCardShowMore } from "../../hooks/use-card-show-more";
import styles from "./category.module.css";
import {
  getCategory,
  getRunningQueriesThunk,
  useGetCategoryQuery,
  getCategoryListWatchs,
  useGetCategoryListWatchsQuery,
  useGetAllWatchsQuery,
} from "../../redux/watchsApi";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const categorySlug = context.query.categorySlug;
    store.dispatch(getCategory.initiate(categorySlug));
    store.dispatch(
      getCategoryListWatchs.initiate({ slug: categorySlug, queryParams: {} })
    );

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {
        query: context.query,
      },
    };
  }
);

export default function Category({ query }) {
  const categorySlug = query.categorySlug;

  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showProperties, setShowProperties] = useState(true);
  const [priceValue, setPriceValue] = useState([0, 0]);

  const { nextFourWatchs, handleNextFourWatchs } = useCardShowMore();

  const {
    data: category,
    isError,
    isLoading,
    isFetching,
  } = useGetCategoryQuery(categorySlug);

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
  if (query.brand) {
    queryParams["brand"] = query.brand;
  }
  if (query.color) {
    queryParams["color"] = query.color;
  }

  const { data: watchs } = useGetCategoryListWatchsQuery({
    slug: categorySlug,
    queryParams,
  });
  const { data: allWatchs } = useGetAllWatchsQuery(queryParams);

  const activeSortType = useSelector((state) => state.sort.sortBy.type);

  useEffect(() => {
    if (category?.name === "Наручні годинники") {
      if (!isLoading && !isError && allWatchs?.length > 0) {
        const maxPrice = allWatchs.reduce((acc, watch) => {
          return watch.price > acc ? watch.price : acc;
        }, 0);
        setPriceValue([0, maxPrice]);
      }
    } else {
      if (!isLoading && !isError && watchs?.length > 0) {
        const maxPrice = watchs.reduce((acc, watch) => {
          return watch.price > acc ? watch.price : acc;
        }, 0);
        setPriceValue([0, maxPrice]);
      }
    }
  }, [isLoading, isError, watchs, allWatchs]);

  function handleChanges(val) {
    /*  setCurrentPage(1); */
    setPriceValue(val);
  }

  let content = null;

  if (category?.name === "Наручні годинники") {
    if (!isLoading && isError) {
      content = <ErrorMsg message="Произошла ошибка! Попробуйте еще раз!" />;
    }
    if (!isLoading && !isError && allWatchs?.length === 0) {
      content = <ErrorMsg message="Товары по данному запросу не найдены!" />;
    }
  } else {
    if (!isLoading && isError) {
      content = <ErrorMsg message="Произошла ошибка! Попробуйте еще раз!" />;
    }
    if (!isLoading && !isError && watchs?.length === 0) {
      content = <ErrorMsg message="Товары по данному запросу не найдены!" />;
    }
  }

  if (category?.name === "Наручні годинники") {
    if (!isLoading && !isError && allWatchs?.length > 0) {
      let watch_items = allWatchs;
      if (activeSortType) {
        if (activeSortType === "new") {
          const newAllWatchItems = [...watch_items];
          watch_items = newAllWatchItems.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
        }
        if (activeSortType === "asc") {
          const newAllWatchItems = [...watch_items];
          watch_items = newAllWatchItems.sort((a, b) => a.price - b.price);
        }
        if (activeSortType === "desc") {
          watch_items = watch_items.slice().sort((a, b) => b.price - a.price);
        }
        if (activeSortType === "discount") {
          watch_items = watch_items.filter((w) => w.discount > 0);
        }
      }
      //price filter
      watch_items = watch_items.filter(
        (w) => w.price >= priceValue[0] && w.price <= priceValue[1]
      );

      content = (
        <WatchList
          watchs={watch_items}
          nextFourWatchs={nextFourWatchs}
          onHandleNextFourWatchs={handleNextFourWatchs}
          categoryPage
        />
      );
    }
  } else {
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
          watch_items = watch_items.slice().sort((a, b) => b.price - a.price);
        }
        if (activeSortType === "discount") {
          watch_items = watch_items.filter((w) => w.discount > 0);
        }
      }
      //price filter
      watch_items = watch_items.filter(
        (w) => w.price >= priceValue[0] && w.price <= priceValue[1]
      );

      content = (
        <WatchList
          watchs={watch_items}
          nextFourWatchs={nextFourWatchs}
          onHandleNextFourWatchs={handleNextFourWatchs}
        />
      );
    }
  }

  return (
    <Layout>
      <Head>
        <title>{category?.name}</title>
      </Head>
      <Row className={styles.category_container}>
        <Col lg={3} className={styles.right}>
          {isLoading && <p>LOADING...</p>}
          {isFetching && <p>FETCHING...</p>}
          <Breadcrumb
            style={{ fontSize: "0.8rem", color: "#bab6b6", paddingTop: "2rem" }}
          >
            <Breadcrumb.Item>Головна</Breadcrumb.Item>
            <Breadcrumb.Item>{category?.name}</Breadcrumb.Item>
          </Breadcrumb>
          <hr />
          <FilterProperties
            showProperties={showProperties}
            categoryPage
            onHandleChanges={handleChanges}
            priceValue={priceValue}
            watchs={category?.name === "Наручні годинники" ? allWatchs : watchs}
          />
        </Col>
        <Col lg={9} className={styles.left}>
          <Sort
            showSortMenu={showSortMenu}
            setShowSortMenu={setShowSortMenu}
            activeSortType={activeSortType}
          />
          <h2 className={styles.category_title}>
            Брендові годинники {category?.name}
          </h2>

          {content}

          <div className={styles.category_description}>
            <div className={styles.category_description_content}>
              <div className={styles.category_description_content_body}>
                <p className={styles.category_description_content_body_img}>
                  <img src={category?.description_image} />
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(category?.description),
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
