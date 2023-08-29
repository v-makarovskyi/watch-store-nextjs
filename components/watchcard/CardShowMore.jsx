import React from "react";
import styles from "./watchcard.module.css";

export default function CardShowMore({ count, onHandleNext }) {
  return (
    <div className={styles.watchlist_card}>
      <div
        aria-label="cardShowMore"
        style={{
          position: "absolute",
          top: "50%",
          left: "56%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <button
          onClick={onHandleNext}
          style={{
            padding: ".5rem",
            border: "none",
            borderRadius: "15px",
            background: "crimson",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Показать еще {count} товаров
        </button>
      </div>
    </div>
  );
}
