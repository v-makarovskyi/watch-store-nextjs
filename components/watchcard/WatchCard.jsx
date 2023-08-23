import { useState, useEffect, useRef } from "react";
import styles from "./watchcard.module.css";
import Link from "next/link";

export default function WatchCard({ item }) {
  const ref = useRef(null);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    if (showFavorites) {
      ref.current.style.transform = "rotate(0deg)";
    } else {
      ref.current.style.transform = "rotate(90deg)";
    }
  }, [showFavorites]);

  return (
    <div className={styles.watchlist_card}>
     {item.hit && (
        <div className={styles.watchlist_card_badge}>
          <span>XIT</span>
        </div>
      )}
      {item.new && (
        <div className={styles.watchlist_card_badge} style={{background:'red'}}>
          <span>new</span>
        </div>
      )}
      <span className={styles.watchlist_card_id}>{item.model}</span>
      <Link href={`/product/${item.slug}`}>
        <div className={styles.watchlist_card_img_container}>
        <img src={item.watch_image.find(img => img.isMain === true).image} />
      </div>
      </Link>
      
      <span className={styles.watchlist_card_brand}>{item.title}</span>
      <p className={styles.watchlist_card_brand_detail}>
        {item.brand.title} {item.model}
      </p>
      <p className={styles.watchlist_card_price}>{item.price} грн</p> 
      <div className={styles.watchlist_card_select}>
        {!showFavorites ? (
          <>
            <button>
              <i className="bi bi-bag" style={{ fontSize: "1rem" }}></i>У КОШИК
            </button>
          </>
        ) : (
          <>
            <div className={styles.watchlist_card_select_hidden}>
              <Link href='/product/12'>
                 <i className="bi bi-eye"></i>
              </Link>
             <i class="bi bi-suit-heart"></i>
            </div>
          </>
        )}
        <div
          onClick={() => setShowFavorites(!showFavorites)}
          ref={ref}
          className={styles.watchlist_card_select_img_wrapper}
        >
          <i
            className="bi bi-three-dots"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
