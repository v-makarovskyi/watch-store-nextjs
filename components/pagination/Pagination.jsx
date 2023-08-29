import React, { useEffect } from "react";
import PaginationPrev from "../../svg/pagination-prev";
import PaginationNext from "../../svg/pagination-next";
import styles from "./pagination.module.css";

export default function Pagination({
  items = [],
  paginatedData,
  currentPage,
  setCurrentPage,
  countOfPage,
}) {
  const startPage = (currentPage - 1) * countOfPage;
  const totalPages = Math.ceil(items.length / countOfPage);

  function getPage(idx) {
    if (idx <= 0 || idx > totalPages) {
      return;
    }
    setCurrentPage(idx);
    /* window.scrollTo(0,0) */
    paginatedData(items, startPage, countOfPage);
  }

  useEffect(() => {
    paginatedData(items, startPage, countOfPage);
  }, [items, startPage, countOfPage]);

  return (
    <nav>
      {totalPages > 1 && (
        <ul className={styles.list}>
          <li>
            <button
              className={styles.btn}
              onClick={() => getPage(currentPage - 1)}
            >
              <PaginationPrev />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (num) => (
              <li key={num} onClick={() => getPage(num)}>
                <button
                  className={
                    currentPage === num
                      ? `${styles.btn} ${styles.active}`
                      : styles.btn
                  }
                >
                  {num}
                </button>
              </li>
            )
          )}
          <li>
            <button
              className={styles.btn}
              onClick={() => getPage(currentPage + 1)}
            >
              <PaginationNext />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
