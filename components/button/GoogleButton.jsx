import React from "react";
import styles from "./button.module.scss";

export const GoogleButton = () => {
  return (
    <div className={styles.google_btn}>
      <div className={styles.google_icon_wrapper}>
        <img
          className={styles.google_icon}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="ggogle-btn"
        />
      </div>
      <p className={styles.btn_text}>
        <b>Вход через аккаунт Google</b>
      </p>
    </div>
  );
};
