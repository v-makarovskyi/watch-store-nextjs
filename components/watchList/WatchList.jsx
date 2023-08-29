import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./watchlist.module.css";
import WatchCard from "../watchcard/WatchCard";
import Button from "../button/Button";
import WatchListLoader from "../loader/shop/WatchListLoader";
import CardShowMore from "../watchcard/CardShowMore";

export default function WatchList({
  home,
  watchs,
  searchPage,
  brandPage,
  categoryPage,
  nextFourWatchs,
  onHandleNextFourWatchs,
  pageStart,
  countOfPage,
  next, 
  onHandleNext
}) {
  const router = useRouter();
  const { isLoading } = router;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hitWatchs, setHitWatchs] = useState([]);
  const [newWatchs, setNewWatchs] = useState([]);

  const handleHitProducts = () => {
    const hitProducts = watchs.filter((watch) => watch.hit === true);
    setHitWatchs(hitProducts);
  };

  const handleNewProducts = () => {
    const newProducts = watchs.filter((watch) => watch.new === true);
    setNewWatchs(newProducts);
  };


  const watchsLength = watchs?.length;

  let content;

  if (isLoading) {
    const loaderData = (
      activeIndex === 1 ? newWatchs : activeIndex === 2 ? hitWatchs : watchs
    )
      ?.map((w, index) => index)
      .fill(<WatchListLoader loading={isLoading} width="390" />);

    content = loaderData?.map((loader) => <>{loader}</>);
  } else {
    if (searchPage) {
      content = (
        <>
          {
            watchs?.slice(pageStart, pageStart + countOfPage).map((watch) => (
              <>
                <WatchCard key={watch.id} item={watch} />
              </>
            ))
          }
        </>
      )
    } else {
      let index = home ? next : nextFourWatchs
       content = (
      <>
        {(activeIndex === 1
          ? newWatchs
          : activeIndex === 2
          ? hitWatchs
          : watchs
        )
          ?.slice(0, index)
          ?.map((w) => (
            <>
              <WatchCard key={w.id} item={w} />
            </>
          ))}
      </>
    );
    }
   
  }

  return (
    <div className={styles.watchlist}>
      {home && (
        <div className={styles.watchlist_filter}>
          <Button
            onClick={() => {
              setActiveIndex(0);
              handleNewProducts();
            }}
            className={
              activeIndex === 0
                ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
                : styles.watchlist_filter_btn
            }
          >
            ПОКАЗАТЬ ВСЕ ЧАСЫ
          </Button>
          <Button
            onClick={() => {
              setActiveIndex(1);
              handleNewProducts();
            }}
            className={
              activeIndex === 1
                ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
                : styles.watchlist_filter_btn
            }
          >
            НОВИНКИ В МАГАЗИНІ
          </Button>
          <Button
            onClick={() => {
              setActiveIndex(2);
              handleHitProducts();
            }}
            className={
              activeIndex === 2
                ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
                : styles.watchlist_filter_btn
            }
          >
            ХІТИ ПРОДАЖІВ
          </Button>
        </div>
      )}
      <div className={styles.watchlist_card_wrapper}>
        <div
          className={styles.wrapp}
          style={{
            display: "grid",
            gridTemplateColumns:
              !home && !searchPage ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          {content}
          {!home && nextFourWatchs < watchsLength && (
            <CardShowMore count="4" onHandleNext={onHandleNextFourWatchs} />
          )}
        </div>
      </div>
      {home &&  next < watchsLength && (
        <button
          style={{
            border: "none",
            padding: ".7rem",
            borderRadius: "20px",
            background: "#0c7918",
            color: "#ffffff",
          }}
          onClick={onHandleNext}
        >
          Показать больше
        </button>
      )}
    </div>
  );
}
