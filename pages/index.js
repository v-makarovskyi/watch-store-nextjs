import Head from "next/head"
import Layout from "../components/layout/layout"
import Slider from "../components/slider/Slider"
import Categories from "../components/categories/categories"
import Brands from "../components/brands/brands"
import Promo from "../components/promo/Promo"
import WatchList from "../components/watchList/WatchList"
import { siteTitle } from "../components/layout/layout"

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
        </Layout>
    )
}