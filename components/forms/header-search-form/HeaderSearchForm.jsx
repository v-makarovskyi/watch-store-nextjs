import React, { useState } from "react";
import useSearchFormSubmit from "../../../hooks/use-search-form";
import styles from "./header-search-form.module.css";

export default function HeaderSearchForm() {
  const { handleSubmit, searchText, setSearchText } = useSearchFormSubmit();
  

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Поиск часов...'
        />
        <button
          style={{
            position: "absolute",
            right: 25,
            top: 8,
            background: "inherit",
            border: "none",
          }}
          type="submit"
        >
          <i
            className="bi bi-search"
            style={{
              fontSize: "1.5rem",
            }}
          ></i>
        </button>
      </form>
    </div>
  );
}
