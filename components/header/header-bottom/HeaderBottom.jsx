import React from "react";
import { useDispatch } from "react-redux";
import { clearSortBy } from "../../../redux/sortSlice";
import Link from "next/link";
import styles from "../header.module.css";

export default function HeaderBottom({
  categories,
  brands,
  activeCategory,
  onHandleActiveCategory,
  showBrands,
  setShowBrands,
}) {
  const dispatch = useDispatch();

  return (
    <div className={styles.header_bottom}>
      <ul className={styles.header_bottom_list}>
        {categories?.map((category) =>
          category.name === "Бренд" ? (
            <li key={category.id} className={styles.header_bottom_list_item}>
              <button
                className={
                  activeCategory.id === category.id
                    ? `${styles.header_bottom_list_item_btn} ${styles.header_bottom_list_item_btn_active}`
                    : `${styles.header_bottom_list_item_btn}`
                }
                onClick={() => {
                  onHandleActiveCategory(category.id);
                  setShowBrands(!showBrands);
                }}
              >
                {category.name}
              </button>
            </li>
          ) : (
            <Link href={`/categories/${category.slug}`}>
              <li key={category.id} className={styles.header_bottom_list_item}>
                <button
                  className={
                    activeCategory.id === category.id
                      ? `${styles.header_bottom_list_item_btn} ${styles.header_bottom_list_item_btn_active}`
                      : `${styles.header_bottom_list_item_btn}`
                  }
                  onClick={() => {
                    onHandleActiveCategory(category.id);
                    dispatch(clearSortBy());
                  }}
                >
                  {category.name}
                </button>
              </li>
            </Link>
          )
        )}
      </ul>
      {activeCategory.name === "Бренд" && (
        <div
          className={
            !showBrands
              ? `${styles.header_bottom_brandslist_hidden}`
              : `${styles.header_bottom_brandslist}`
          }
        >
          <ul>
            {activeCategory.name === "Бренд" &&
              brands.map((item, index) => (
                <Link href={`/brand/${item.slug}`}>
                  <li
                    onClick={() => {
                      dispatch(clearSortBy());
                      setShowBrands(false);
                    }}
                    key={item.name}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
