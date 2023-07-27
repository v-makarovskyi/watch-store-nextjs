import { useState } from "react";
import styles from "./watchlist.module.css";
import WatchCard from "../watchcard/WatchCard";
import Button from "../button/Button";

export default function WatchList({ home }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.watchlist}>
      {home && (
        <div className={styles.watchlist_filter}>
          <Button
            isActive={activeIndex === 0}
            onClick={() => setActiveIndex(0)}
            className={
              activeIndex === 0
                ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
                : styles.watchlist_filter_btn
            }
          >
            НОВИНКИ В МАГАЗИНІ
          </Button>
          <Button
            onClick={() => setActiveIndex(1)}
            className={
              activeIndex === 1
                ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
                : styles.watchlist_filter_btn
            }
          >
            ХІТИ ПРОДАЖІВ
          </Button>
        </div>
      )}
      <div className={styles.watchlist_card_wrapper} style={{justifyContent: home ? 'center' : 'flex-start'}}>
        <WatchCard />
        <WatchCard />
        <WatchCard />
        <WatchCard />
        <WatchCard />
      </div>
    </div>
  );
}
