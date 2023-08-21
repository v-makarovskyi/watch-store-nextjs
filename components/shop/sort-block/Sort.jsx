import React from "react";
import { sortData } from "../../../data/sortData";
import styles from "./sort.module.css";

export default function Sort({ onHandleSelectSortValue, setShowSortMenu, showSortMenu }) {

    function handleSortOption(id) {
        sortData.map((item) => {
            if (item.id === id) {
                onHandleSelectSortValue(item.value)
            }
        })
    }

  return (
    <div className={styles.container}>
      <div
        className={styles.brand_sort}
        onClick={() => setShowSortMenu(!showSortMenu)}
      >
        <span>
          <i class="bi bi-filter-left"></i>
        </span>
      </div>
      <div
        className={
          showSortMenu
            ? styles.brand_sort_dropdown
            : styles.brand_sort_dropdown_hidden
        }
      >
        <ul className={styles.brand_sort_dropdown_list}>
          {sortData?.map((item) => (
            <li key={item.id} className={styles.brand_sort_dropdown_list_item}>
              <button onClick={() => handleSortOption(item.id)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
