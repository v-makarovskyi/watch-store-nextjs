import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../components/pagination/Pagination";
import Link from "next/link";
import Sort from "../../components/shop/sort-block/Sort";
import ErrorMsg from "../../components/common/errorMsg/ErrorMsg";
import Layout from "../../components/layout/Layout";
import { Row, Breadcrumb, Col } from "react-bootstrap";
import WatchList from "../../components/watchList/WatchList";
import { useCardShowMore } from "../../hooks/use-card-show-more";
import Head from "next/head";
import {
  getSearchResult,
  getRunningQueriesThunk,
  useGetSearchResultQuery,
} from "../../redux/watchsApi";
import { wrapper } from "../../redux/store";
import styles from "./search.module.css";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const searchText = context.query.searchText;
    store.dispatch(getSearchResult.initiate(searchText));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {
        query: context.query,
      },
    };
  }
);

export default function SearchPage({ query }) {
  const searchText = query.searchText;
  const {
    data: watchs,
    isError,
    isLoading,
  } = useGetSearchResultQuery(searchText);

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(watchs)
  const [pageStart, setPageStart] = useState(0)
  const [countOfPage, setCountOfPage] = useState(6)

  const paginatedData = (items, startPage, pageCount) => {
    setFilteredData(items)
    setPageStart(startPage)
    setCountOfPage(pageCount)
  }

  const [showSortMenu, setShowSortMenu] = useState(false);
  const activeSortType = useSelector((state) => state.sort.sortBy.type);

  /*  const { nextFourWatchs, handleNextFourWatchs } = useCardShowMore(); */

  let content = null;
  if (isLoading) {
    content = "Загрузка данных поиска...";
  }
  if (!isLoading && isError) {
    content = <ErrorMsg message="Произошла неизвестная ошибка! Повторите!" />;
  }

  if (!isLoading && !isError && watchs?.length === 0) {
    content = <ErrorMsg message="Товары по Вашему запросу не найдены" />;
  }
  if (!isError && !isLoading && watchs?.length > 0) {
    let watch_items = watchs;
    if (activeSortType) {
      if (activeSortType === "new") {
        watch_items = watch_items
          .slice()
          .sort((a, b) => new Date(a) - new Date(b));
      }
      if (activeSortType === "asc") {
        watch_items = watch_items.slice().sort((a, b) => a.price - b.price);
      }
      if (activeSortType === "desc") {
        watch_items = watch_items.slice().sort((a, b) => b.price - a.price);
      }
      if (activeSortType === "discount") {
        watch_items = watch_items.filter((w) => w.discount > 0);
      }
    }
    const filterPageProps = {
      pageStart: pageStart, 
      countOfPage: countOfPage
    }

    content = (
      <WatchList
        searchPage
        watchs={watch_items}
        filteredData={filteredData}
        pageStart={pageStart}
        countOfPage={countOfPage}
      />
    );
  }

  return (
    <Layout>
      <Head>
        <title>Search-page</title>
        <meta property="og:title" content="Search-page title" key="title" />
      </Head>
      <Row className={styles.container}>
        <h3 className={styles.title}>Результаты поиска</h3>
        <Row>
          <Col md={3}>
            <Breadcrumb
              style={{
                fontSize: "0.8rem",
                color: "#bab6b6",
                paddingTop: "2rem",
              }}
            >
              <Breadcrumb.Item>Главная</Breadcrumb.Item>
              <Breadcrumb.Item>Результаты поиска</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col md={9}>
            <Sort
              setShowSortMenu={setShowSortMenu}
              showSortMenu={showSortMenu}
              activeSortType={activeSortType}
            />
          </Col>
        </Row>
        {content}
        <div className={styles.pagination}>
          <Pagination
            items={watchs}
            paginatedData={paginatedData}
            countOfPage={5}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> 
        </div>
      </Row>
    </Layout>
  );
}
