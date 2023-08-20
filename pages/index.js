import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/categories";
import Brands from "../components/brands/brands";
import Promo from "../components/promo/Promo";
import WatchList from "../components/watchList/WatchList";
import GeneralText from "../components/generaltext/GeneralText";
import { siteTitle } from "../components/layout/Layout";
import { wrapper } from "../redux/store";
import { getAllWatchs, getRunningQueriesThunk, useGetAllWatchsQuery } from "../redux/watchsApi";
import { useRouter } from "next/router";


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async({req, res, params, query}) => {
    store.dispatch(getAllWatchs.initiate({}))

    await Promise.all(store.dispatch(getRunningQueriesThunk()))
    return {
      props: {}
    }
  }
)

export default function Home() {

  const router = useRouter()
  const query = router.query
  
  const { isLoading, isError, data } = useGetAllWatchsQuery(query)

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Slider />
      <Categories />
      <Brands />
      <Promo />
      <WatchList home watchs={data} />
      <GeneralText />
    </Layout>
  );
}
