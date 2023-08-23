import { useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import styles from "./watchcard.module.css";
import Link from "next/link";

function CardSlider({ elems }) {
  const images = elems?.map((elem) => {
    const item = {
      original: elem.image,
    };
    return item;
  });

  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      renderRightNav={(onClick, disabled) => (
        <RightNav onClick={onClick} disabled={disabled} />
      )}
      renderLeftNav={(onClick, disabled) => (
        <LeftNav onClick={onClick} disabled={disabled} />
      )}
    />
  );
}

function RightNav(props) {
  const options = {
    top: "10px",
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "50%",
    /*  background: "#2fb73f", */
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "34px",
    lineHeight: "29px",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };
  const { onClick } = props;
  return (
    <button
      className="bikegallery-nextarrow-wrapper image-gallery-icon image-gallery-right-nav"
      onClick={onClick}
    >
      <div classname="next-arrow">
        <i class="bi bi-arrow-right-short" style={options}></i>
      </div>
    </button>
  );
}

function LeftNav(props) {
  const options = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    /*  background: "#2fb73f", */
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    fontSize: "34px",
    lineHeight: "29px",
    cursor: "pointer",
  };
  const { onClick } = props;
  return (
    <button
      className="bikegallery-nextarrow-wrapper image-gallery-icon image-gallery-left-nav"
      onClick={onClick}
    >
      <div className="next-arrow">
        <i class="bi bi-arrow-left-short" style={options}></i>
      </div>
    </button>
  );
}

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
        <div
          className={styles.watchlist_card_badge}
          style={{ background: "red" }}
        >
          <span>new</span>
        </div>
      )}
      <span className={styles.watchlist_card_id}>{item.model}</span>

      <div className={styles.watchlist_card_img_container}>
        <CardSlider elems={item ? item.watch_image : []} />
      </div>

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
              <Link href={`/product/${item.slug}`}>
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
