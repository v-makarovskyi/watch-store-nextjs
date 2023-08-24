import React, { useState } from "react";
import { useRouter } from "next/router";
import { colorsFilterData } from "../../../../data/filterData";
import ColorFilterLoader from "../../../loader/shop/ColorFilterLoader";
import styles from "../filterProperties.module.css";

export default function ColorFilter({ setColor, watchs }) {
  const router = useRouter();
  const { isLoading } = router;


  function handleColor(e) {
    if (e.target.checked) {
      setColor(e.target.value);
    } else {
      setColor("");
    }
  }

  let content = null;
  if (isLoading) {
    content = <ColorFilterLoader />;
  } else {
    content = (
      <>
        {colorsFilterData.map((color) => (
          <div className={styles.properties}>
            <div className={styles.properties_top}>
              <h4>{color.title}</h4>
            </div>
            <div className={styles.colors_checkboxes_wrapper}>
              {color?.variants?.map((variant) => (
                <div key={variant.id} className={styles.widget_checkbox_circle}>
                  <input
                    id={variant.value}
                    type="checkbox"
                    value={variant.value}
                    onChange={handleColor}
                    checked={
                      router.query.color === variant.value ? "checked" : false
                    }
                  />
                  <label htmlFor={variant.value}>{variant.name}</label>
                  <span
                    className={styles.widget_checkbox_circle_self}
                    style={{ backgroundColor: `${variant.value}` }}
                  >
                    {router.query.color === variant.value && (
                      <i
                        style={{
                          fontSize: "1.5rem",
                          color: "white",
                        }}
                        className="bi bi-circle"
                      ></i>
                    )}{" "}
                  </span>
                  <span className={styles.colorCounter}>
                    {
                      watchs?.map((watch) => watch.color).filter((elem) => elem === variant.value).length
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }

  return <>{content}</>;
}
