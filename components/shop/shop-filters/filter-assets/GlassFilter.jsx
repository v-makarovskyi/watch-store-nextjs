import React from "react";
import { useRouter } from "next/router";
import { glassFilterData } from "../../../../data/filterData";
import GlassFilterLoader from "../../../loader/shop/GlassFilterLoader";
import styles from "../filterProperties.module.css";

export default function GlassFilter({ showProperties, handleGlassType, setGlass }) {
  const router = useRouter();
  const { isLoading } = router;

  function handleGlassType(e) {
    if (e.target.checked) {
      setGlass(e.target.value);
    } else {
      setGlass("");
    }
  }

  let content;
  if (isLoading) {
    content = (
      <div className={styles.properties}>
        <GlassFilterLoader loading={isLoading} width="50" />
        <hr />
      </div>
    )
  } else {
    content = (
      <>
      {glassFilterData?.map((gf) => (
        <div key={gf.id} className={styles.properties}>
          <div className={styles.properties_top}>
            <h4>{gf.title}</h4>
          </div>
          <div
            className={
              showProperties ? styles.variants : styles.variants_hidden
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
      </>
    )
  }

  return (
    <>
      { content }
    </>
  );
}
