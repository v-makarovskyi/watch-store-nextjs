import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./header.module.css";
import Link from "next/link";
import { useGetCategoriesQuery, useGetBrandsQuery } from "../../redux/watchsApi";
import axiosElement from "../../utils/axios-element";

const languages = [
  { id: 1, flag: "🇺🇦", title: "Українська" },
  { id: 2, flag: "🇬🇧", title: "English" },
  { id: 3, flag: "🇷🇺", title: "Русский" },
];

export default function Header() {
  
  const { data: categories } = useGetCategoriesQuery()
  const { data: brands } = useGetBrandsQuery()
 
  const [currentLanguage, setCurrentLanguage] = useState({
    id: 1,
    flag: "🇺🇦",
    title: "Українська",
  });
  const [showLanguagesList, setShowLangugesList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState({});
  const [showBrands, setShowBrands] = useState(false);

  function handleSelectLanguage(itemId) {
    const nextCurrentLanguage = languages.find((lang) => lang.id === itemId);
    setCurrentLanguage(nextCurrentLanguage);
    setShowLangugesList(false);
  }

  function handleActiveCategory(categoryId) {
    const nextCategory = categories.find(
      (category) => category.id === categoryId
    );
    setActiveCategory(nextCategory);
  }

  return (
    <header className={styles.header}>
      {/* Header Top */}
      <div className={styles.header_top}>
        <ul className={styles.header_top_list}>
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
                  <button onClick={() => handleSelectLanguage(l.id)}>
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <div className={styles.header_middle}>
        <div className={styles.header_middle_logo}>
          <Link href="/">
            <span>WATCH-STORE</span>
          </Link>
        </div>
        <div className={styles.header_middle_contacts}>
          <div className={styles.header_middle_contacts_top}>
            <span>+38(067) 555-66-77</span>
            <button onClick={() => setShowModal(!showModal)}>
              <i
                className="bi bi-arrow-down-short"
                style={{ fontSize: "1rem", color: "red" }}
              ></i>
            </button>
            <div
              className={
                showModal
                  ? styles.header_middle_contacts_top_modal
                  : styles.header_middle_contacts_top_modal_hidden
              }
            >
              <div className={styles.header_middle_contacts_top_modal_wrapper}>
                <h4>Магазин Watch-store</h4>
                <i
                  onClick={() => setShowModal(false)}
                  className="bi bi-x"
                  style={{
                    fontSize: "1.8rem",
                    position: "absolute",
                    top: 10,
                    right: 10,
                    cursor: "pointer",
                  }}
                ></i>
                <p>ПН-ВС 10:00 - 18:00</p>
                <p>0(800) 33-09-37</p>
                <p>+38(063) 766-66-58</p>
                <p>+38(066) 341-90-09</p>
                <div
                  className={styles.header_middle_contacts_top_modal_content}
                >
                  <h5>Timeshop Service</h5>
                  <span>(Післягарантійний Ремонт Годинників)</span>
                  <p>+38(073) 445-99-50</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.header_middle_contacts_bottom}>
            <button>Замовити зворотній дзвінок </button>
            <form></form>
            <button>Контакти</button>
          </div>
        </div>
        <div className={styles.header_middle_search}>
          <input type="text" />
          <i
            className="bi bi-search"
            style={{
              fontSize: "1.5rem",
              position: "absolute",
              right: 25,
              top: 8,
            }}
          ></i>
        </div>
        <div className={styles.header_middle_icons}>
          <i className="bi bi-suit-heart"></i>
          <i className="bi bi-person-circle"></i>
          <div className={styles.cart}>
            <i className="bi bi-bag"></i>
            <span>0</span>
          </div>
        </div>
      </div>

      {/*  Header Bottom */}
      <div className={styles.header_bottom}>
        <ul className={styles.header_bottom_list}>
          {categories?.map((category) =>
            category.name === "Бренд" ? (
              <li
                key={category.id}
                className={styles.header_bottom_list_item}
              >
                <button
                  className={
                    activeCategory.id === category.id
                      ? `${styles.header_bottom_list_item_btn} ${styles.header_bottom_list_item_btn_active}`
                      : `${styles.header_bottom_list_item_btn}`
                  }
                  onClick={() => {
                    handleActiveCategory(category.id);
                    setShowBrands(!showBrands);
                  }}
                >
                  {category.name}
                </button>
              </li>
            ) : (
              <Link href={`/categories/${category.slug}`}>
                <li
                  key={category.id}
                  className={styles.header_bottom_list_item}
                >
                  <button
                    className={
                      activeCategory.id === category.id
                        ? `${styles.header_bottom_list_item_btn} ${styles.header_bottom_list_item_btn_active}`
                        : `${styles.header_bottom_list_item_btn}`
                    }
                    onClick={() => {
                      handleActiveCategory(category.id);
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
                    <li key={item.name}>{item.title}</li>
                  </Link>
                ))} 
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
