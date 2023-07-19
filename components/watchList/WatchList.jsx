import { useState, useRef, useEffect } from "react";
import styles from "./watchlist.module.css";

export default function WatchList() {
  const ref = useRef(null);

  const [selectFilter, setSelectFilter] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);

  useEffect(() => {
    if (showFavorites) {
      ref.current.style.transform = "rotate(0deg)";
    } else {
      ref.current.style.transform = "rotate(90deg)";
    }
  }, [showFavorites]);

  return (
    <div className={styles.watchlist}>
      <div className={styles.watchlist_filter}>
        <button
          key={1}
          onClick={() => setSelectFilter(!selectFilter)}
          className={
            !selectFilter
              ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
              : styles.watchlist_filter_btn
          }
        >
          НОВИНКИ В МАГАЗИНІ
        </button>
        <button
          key={2}
          onClick={() => setSelectFilter(!selectFilter)}
          className={
            selectFilter
              ? `${styles.watchlist_filter_btn} ${styles.watchlist_filter_btn_active}`
              : styles.watchlist_filter_btn
          }
        >
          ХІТИ ПРОДАЖІВ
        </button>
      </div>
      <div className={styles.watchlist_card_wrapper}>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
        <div
          className={styles.watchlist_card}
          onPointerEnter={() => setShowDetails(true)}
          onPointerLeave={() => setShowDetails(false)}
        >
          <span className={styles.watchlist_card_id}>2233</span>
          <div className={styles.watchlist_card_img_container}>
            <img src="/images/watch/tissot.webp" />
          </div>
          <span className={styles.watchlist_card_brand}>TISSOT</span>
          <p className={styles.watchlist_card_brand_detail}>
            TISSOT T063.617.36.037.00 TRADITION CHRONOGRAPH
          </p>
          <p className={styles.watchlist_card_price}>7000 uah</p>
          <div className={styles.watchlist_card_select}>
            {!showFavorites ? (
              <>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-bag"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  У КОШИК
                </button>
              </>
            ) : (
              <>
                <div className={styles.watchlist_card_select_hidden}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-suit-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                  </svg>
                </div>
              </>
            )}

            <div
              onClick={() => setShowFavorites(!showFavorites)}
              ref={ref}
              className={styles.watchlist_card_select_img_wrapper}
            >
              <img src="images/assets/dotteds.png" alt="#" />
            </div>
          </div>
          {showDetails && (
            <div className={styles.watchlist_card_details}>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Бренд
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  <span style={{ color: "red" }}>TISSOT</span>
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Тип
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Чоловічий <br /> годинник
                </span>
              </div>
              <div className={styles.watchlist_card_details_item}>
                <span className={styles.watchlist_card_details_item_left}>
                  Механізм
                </span>

                <span className={styles.watchlist_card_details_item_right}>
                  Кварцовий
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
