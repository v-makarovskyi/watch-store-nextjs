import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useGetAllWatchsQuery } from "../../redux/watchsApi";
import {
  watchtypeFilterData,
  brandFilterData,
  glassFilterData,
  wristbandFilterData,
} from "../../data/filterData";
import ErrorMsg from "../common/errorMsg/ErrorMsg";
import styles from "./filterProperties.module.css";

export const ResetButton = ({ pathname }) => {
  const router = useRouter();
  return (
    <button 
      className={styles.resetButton} 
      onClick={() => {
        router.push(pathname)
      }}
      >
      Сбросить фильтры
    </button>
  );
};

const FilterProperties = ({ showProperties, brandPage, categoryPage }) => {
  const router = useRouter();
  const brandSlug = router.query.brandSlug;
  const categorySlug = router.query.categorySlug;

  const [watchType, setWatchType] = useState("");
  const [watchBrand, setWatchBrand] = useState("");
  const [glass, setGlass] = useState("");
  const [wristband, setWristband] = useState("");

  useEffect(() => {
    let type = watchType && `watch_type=${watchType}`;
    let watch_brand = watchBrand && `&brand=${watchBrand}`;
    let glass_type = glass && `&glass=${glass}`;
    let wristband_type = wristband && `&wristband=${wristband}`;

    if (categoryPage) {
      router.push(
        `/categories/${categorySlug}?` +
          type +
          watch_brand +
          glass_type +
          wristband_type
      );
    }

    if (brandPage) {
      router.push(
        `/brand/${brandSlug}?` +
          type +
          watch_brand +
          glass_type +
          wristband_type
      );
    }
  }, [watchType, watchBrand, wristband, glass]);

  function handleWatchType(e) {
    if (e.target.checked) {
      setWatchType(e.target.value);
    } else {
      setWatchType("");
    }
  }

  function handleGlassType(e) {
    if (e.target.checked) {
      setGlass(e.target.value);
    } else {
      setGlass("");
    }
  }

  function handleWatchBrand(e) {
    if (e.target.checked) {
      setWatchBrand(e.target.value);
    } else {
      setWatchBrand("");
    }
  }

  function handleWristbandType(e) {
    if (e.target.checked) {
      setWristband(e.target.value);
    } else {
      setWristband("");
    }
  }

  return (
    <div className="filters_wrapper">
      {categorySlug !== "zhinochi" && categorySlug !== "cholovichi" && (
        <>
          {watchtypeFilterData.map((wt) => (
            <div key={wt.id} className={styles.brand_container_properties}>
              <div className={styles.brand_container_properties_top}>
                <h4>{wt.title}</h4>
              </div>
              <div
                className={
                  showProperties
                    ? styles.brand_container_variants
                    : styles.brand_container_variants_hidden
                }
              >
                {wt.variants.map((v, i) => (
                  <label key={i}>
                    <input
                      type="checkbox"
                      name=""
                      value={v.value}
                      onChange={handleWatchType}
                      checked={
                        router.query.watch_type === v.value ? "checked" : false
                      }
                    />
                    {v.name}
                  </label>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </>
      )}

      {!brandPage && (
        <>
          {brandFilterData.map((bf) => (
            <div key={bf.id} className={styles.brand_container_properties}>
              <div className={styles.brand_container_properties_top}>
                <h4>{bf.title}</h4>
              </div>
              <div
                className={
                  showProperties
                    ? styles.brand_container_variants
                    : styles.brand_container_variants_hidden
                }
              >
                {bf.variants.map((v, i) => (
                  <label key={i}>
                    <input
                      type="checkbox"
                      name=""
                      value={v.value}
                      onChange={handleWatchBrand}
                      checked={
                        router.query.brand === v.value ? "checked" : false
                      }
                    />
                    {v.name}
                  </label>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </>
      )}

      {glassFilterData.map((gf) => (
        <div key={gf.id} className={styles.brand_container_properties}>
          <div className={styles.brand_container_properties_top}>
            <h4>{gf.title}</h4>
          </div>
          <div
            className={
              showProperties
                ? styles.brand_container_variants
                : styles.brand_container_variants_hidden
            }
          >
            {gf.variants.map((v, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  name=""
                  value={v.value}
                  onChange={handleGlassType}
                  checked={router.query.glass === v.value ? "checked" : false}
                />
                {v.name}
              </label>
            ))}
          </div>
          <hr />
        </div>
      ))}

      {wristbandFilterData.map((wf) => (
        <div key={wf.id} className={styles.brand_container_properties}>
          <div className={styles.brand_container_properties_top}>
            <h4>{wf.title}</h4>
          </div>
          <div
            className={
              showProperties
                ? styles.brand_container_variants
                : styles.brand_container_variants_hidden
            }
          >
            {wf.variants.map((v, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  name=""
                  value={v.value}
                  onChange={handleWristbandType}
                  checked={
                    router.query.wristband === v.value ? "checked" : false
                  }
                />
                {v.name}
              </label>
            ))}
          </div>
        </div>
      ))}
      <ResetButton
        pathname={
          categoryPage ? `/categories/${categorySlug}?` : `/brand/${brandSlug}?`
        }
      />
    </div>
  );
};

export default FilterProperties;
