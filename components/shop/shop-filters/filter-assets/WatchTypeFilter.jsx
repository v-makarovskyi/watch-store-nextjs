import React from "react";
import { useRouter } from "next/router";
import { watchtypeFilterData } from "../../../../data/filterData";
import styles from "../filterProperties.module.css";

export default function WatchTypeFilter({ setWatchType, showProperties }) {
  const router = useRouter();

  function handleWatchType(e) {
    if (e.target.checked) {
      setWatchType(e.target.value);
    } else {
      setWatchType("");
    }
  }

  return (
    <>
      {watchtypeFilterData?.map((wt) => (
        <div key={wt.id} className={styles.properties}>
          <div className={styles.properties_top}>
            <h4>{wt.title}</h4>
          </div>
          <div
            className={
              showProperties ? styles.variants : styles.variants_hidden
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
  );
}
