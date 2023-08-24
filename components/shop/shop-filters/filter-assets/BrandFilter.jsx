import React from "react";
import { useRouter } from "next/router";
import { brandFilterData } from "../../../../data/filterData";
import BrandFilterLoader from "../../../loader/shop/BrandFilterLoader";
import styles from "../filterProperties.module.css";

export default function BrandFilter({ showProperties, setWatchBrand }) {
  const router = useRouter();
  const { isLoading } = router;

  function handleWatchBrand(e) {
    if (e.target.checked) {
      setWatchBrand(e.target.value);
    } else {
      setWatchBrand("");
    }
  }

  let content
  content = (
    <div className={styles.properties}>
      <BrandFilterLoader loading={isLoading} width="20" />
    </div>
  );
  if (isLoading) {
    content = (
      <div className={styles.properties}>
        <BrandFilterLoader loading={isLoading} width="50" />
      </div>
    );
  } else {
    content = (
      <>
        {brandFilterData.map((bf) => (
          <div key={bf.id} className={styles.properties}>
            <div className={styles.properties_top}>
              <h4>{bf.title}</h4>
            </div>
            <div
              className={
                showProperties ? styles.variants : styles.variants_hidden
              }
            >
              {bf.variants.map((v, i) => (
                <label key={i}>
                  <input
                    type="checkbox"
                    name=""
                    value={v.value}
                    onChange={handleWatchBrand}
                    checked={router.query.brand === v.value ? "checked" : false}
                  />
                  {v.name}
                </label>
              ))}
            </div>
            <hr />
          </div>
        ))}
      </>
    );
  }

  return <>{content}</>
}
