import React from "react";
import InputRange from "./InputRange";
import PriceFilterLoader from "../../loader/shop/PriceFilterLoader";
import { useRouter } from "next/router";
import styles from "./price-filter.module.css";

export default function PriceFilter({ priceValue, handleChanges, watchs }) {
  const router = useRouter();

  const maxPrice = watchs?.reduce((acc, watch) => {
    return watch?.price > acc ? watch.price : acc;
  }, 0);

  const { isLoading } = router;
  let content = null;
  content = <PriceFilterLoader loading={isLoading} width='50' />;
 if (isLoading) {
    content = <PriceFilterLoader loading={isLoading} />;
  } else {
    content = (
      <div className={styles.wrapper}>
        <h4 className={styles.title}>Ціна</h4>
        <div className={styles.slider_range}>
          <InputRange
            STEP={1}
            MIN={0}
            MAX={maxPrice}
            values={priceValue}
            handleChanges={handleChanges}
          />
        </div>

        <span className={styles.price_range}>
          {priceValue[0]}грн - {priceValue[1]}грн
        </span>
      </div>
    );
  } 

  return (
    <div className={styles.container}>
      {content}
    <hr />
    </div>
  );
}
