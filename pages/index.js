import Head from "next/head"
import Layout from "../components/layout/Layout"
import Slider from "../components/slider/Slider"
import Categories from "../components/categories/categories"
import Brands from "../components/brands/brands"
import Promo from "../components/promo/Promo"
import WatchList from "../components/watchList/WatchList"
import GeneralText from "../components/generaltext/GeneralText"
import { siteTitle } from "../components/layout/Layout"

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Slider />
            <Categories />
            <Brands />
            <Promo />
            <WatchList />
            <GeneralText />
        </Layout>
    )
}