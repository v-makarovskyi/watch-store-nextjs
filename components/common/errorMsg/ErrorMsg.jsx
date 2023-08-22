import React from "react";
import { useRouter } from "next/router";
import styles from "./errormsg.module.css";

export default function ErrorMsg({ message }) {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      <div className={styles.btns}>
        <button className={`${styles.error_btn} ${styles.error_btn_prev}`}
          onClick={() => router.back()}
        >
          <i className="bi bi-arrow-return-left"></i> <span>На предыдущую</span>
        </button>
        <button className={`${styles.error_btn} ${styles.error_btn_main}`}
          onClick={() => router.push('/')}
        >
          <span>На главную</span> <i className="bi bi-arrow-return-right"></i>
        </button>
      </div>
    </div>
  );
}
