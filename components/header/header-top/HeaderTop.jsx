import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../header.module.scss";

export default function HeaderTop({
  languages,
  onHandleSelectLanguage,
  setShowLangugesList,
  showLanguagesList,
  currentLanguage,
}) {
  return (
    <Row className={styles.top}>
      <Col md={10}  className="p-0">
       <ul className={styles.top_list}>
        <li className={styles.header_top_list_item}>
          <span>Возврат и Обмен</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Блог</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Магазины</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Отзывы</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Все акции</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Рассрочка 0%</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Система скидок</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Ремонт часов</span>
        </li>
        <li className={styles.header_top_list_item}>
          <span>Доставка, оплата</span>
        </li>
      </ul>
      </Col>
     <Col md={2} className="pe-0">
      <div className={styles.languages}>
        <button
          className={styles.languages_btn}
          onClick={() => setShowLangugesList(!showLanguagesList)}
        >
          {currentLanguage.flag} <span>{currentLanguage.title}</span>
          <i
            className="bi bi-arrow-down-short"
            style={{ fontSize: "1rem", color: "red" }}
          ></i>
        </button>
        <div
          className={
            showLanguagesList
              ? styles.languages_dropdown
              : styles.languages_dropdown_hidden
          }
        >
          <ul className={styles.languages_dropdown_list}>
            {languages.map((l, index) => (
              <li key={l.id} className={styles.languages_dropdown_list_item}>
                {l.flag}{" "}
                <button onClick={() => onHandleSelectLanguage(l.id)}>
                  {l.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
     </Col>
     
    </Row>
  );
}
