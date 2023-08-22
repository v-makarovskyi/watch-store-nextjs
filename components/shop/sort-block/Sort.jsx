import React from "react";
import { useDispatch } from "react-redux";
import { sortData } from "../../../data/sortData";
import { setSortBy } from "../../../redux/sortSlice";
import styles from "./sort.module.css";

export default function Sort({
  setShowSortMenu,
  showSortMenu,
  activeSortType,
}) {
  
  const dispatch = useDispatch();

  function handleSortOption(id) {
    sortData.map((item) => {
      if (item.id === id) {
        dispatch(setSortBy(item.value));
      }
    });
    setShowSortMenu(false);
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
              <button
                className={
                  activeSortType === item.value
                    ? `${styles.btn_sort} ${styles.btn_sort_active}`
                    : styles.btn_sort
                }
                onClick={() => handleSortOption(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
