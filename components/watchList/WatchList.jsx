import { useState } from "react";
import styles from "./watchlist.module.css";
import WatchCard from "../watchcard/WatchCard";
import Button from "../button/Button";

export default function WatchList({ home, watchs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hitWatchs, setHitWatchs] = useState([])
  const [newWatchs, setNewWatchs] = useState([])

  const handleHitProducts = () => {
    const hitProducts = watchs.filter((watch) => watch.hit === true)
    setHitWatchs(hitProducts)
  }

  const handleNewProducts = () => {
    const newProducts = watchs.filter((watch) => watch.new === true)
    setNewWatchs(newProducts)
  }

  return (
    <div className={styles.watchlist}>
      {home && (
        <div className={styles.watchlist_filter}>
          <Button
            onClick={() => {
              setActiveIndex(0)
              handleNewProducts()
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
              setActiveIndex(1)
              handleNewProducts()
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
              setActiveIndex(2)
              handleHitProducts()
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
      <div className={styles.watchlist_card_wrapper} style={{justifyContent: home ? 'center' : 'flex-start'}}>
          {
             (activeIndex === 1 ? newWatchs : activeIndex === 2 ? hitWatchs : watchs)?.map(w => (
              <WatchCard key={w.id} item={w} />
            ))
          }
      </div> 
    </div>
  );
}
