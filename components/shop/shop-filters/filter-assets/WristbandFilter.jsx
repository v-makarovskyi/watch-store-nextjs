import React from "react";
import { useRouter } from "next/router";
import { wristbandFilterData } from "../../../../data/filterData";
import WristbandFilterLoader from "../../../loader/shop/WristbandFilterLoader";
import styles from "../filterProperties.module.css";

export default function WristbandFilter({ setWristband, showProperties }) {
  const router = useRouter();
  const { isLoading } = router

  function handleWristbandType(e) {
    if (e.target.checked) {
      setWristband(e.target.value);
    } else {
      setWristband("");
    }
  }

  let content
  if(isLoading) {
    content = (
      <div className={styles.properties}>
        <WristbandFilterLoader loading={isLoading} width='50' />
      </div>
    )
  } else {
    content = (
      <>
      {wristbandFilterData?.map((wf) => (
        <div key={wf.id} className={styles.properties}>
          <div className={styles.properties_top}>
            <h4>{wf.title}</h4>
          </div>
          <div
            className={
              showProperties ? styles.variants : styles.variants_hidden
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
          <hr />
        </div>
      ))}{" "}
      </>
    )
  }

  return (
    <>
      { content }
    </>
  );
}
