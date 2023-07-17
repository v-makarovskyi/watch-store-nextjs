import { useState } from "react";
import Head from "next/head";
import { Container, Row, Modal, Dropdown } from "react-bootstrap";
import styles from "./layout.module.css";

export const siteTitle = "watch-store-nextjs";
const languages = [
  { id: 1, flag: "🇺🇦", title: "Українська" },
  { id: 2, flag: "🇬🇧", title: "English" },
  { id: 3, flag: "🇷🇺", title: "Русский" },
];

export default function Layout({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState({
    id: 1,
    flag: "🇺🇦",
    title: "Українська",
  });
  const [showLanguagesList, setShowLangugesList] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleSelectLanguage(itemId) {
    const nextCurrentLanguage = languages.find((lang) => lang.id === itemId);
    setCurrentLanguage(nextCurrentLanguage);
    setShowLangugesList(false);
  }

  return (
    <Container fluid className={styles.layout_container}>
      <Head>
        <meta
          name="description"
          content="Online watch store. Developed with NextJS, React and PostgreSQL"
        />
        <meta name="og:title" content={siteTitle} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <heder className={styles.header}>
        <Container fluid className="p-0">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
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
                    <li
                      key={l.id}
                      className={styles.languages_dropdown_list_item}
                    >
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
        </Container>
        <Container fluid className="p-0">
          <div className={styles.header_middle}>
            <div className={styles.header_middle_logo}>
              <span>Watch-store</span>
            </div>
            <div className={styles.header_middle_contacts}>
              <div className={styles.header_middle_contacts_top}>
                <span>+38(067) 555-66-77</span>
                <button onClick={() => setShowModal(!showModal)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </button>
                <div
                  className={
                    showModal
                      ? styles.header_middle_contacts_top_modal
                      : styles.header_middle_contacts_top_modal_hidden
                  }
                >
                  <div
                    className={styles.header_middle_contacts_top_modal_wrapper}
                  >
                    <h4>Магазин Watch-store</h4>
                    <svg
                      onClick={() => setShowModal(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-x"
                      viewBox="0 0 16 16"
                      style={{
                        position: "absolute",
                        top: "10",
                        right: "10",
                        cursor: "pointer",
                      }}
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    <p>ПН-ВС 10:00 - 18:00</p>
                    <p>0(800) 33-09-37</p>
                    <p>+38(063) 766-66-58</p>
                    <p>+38(066) 341-90-09</p>
                    <div
                      className={
                        styles.header_middle_contacts_top_modal_content
                      }
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
              <svg
                style={{ position: "absolute", right: 25, top: 12 }}
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className={styles.header_middle_icons}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <div className={styles.cart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <span>0</span>
              </div>
            </div>
          </div>
        </Container>
        <Container fluid className="p-0">
          <div className={styles.header_bottom}>
            <ul className={styles.header_bottom_list}>
              <li className={styles.header_bottom_list_item}>
                <span>Бренди</span>
              </li>
              <li className={styles.header_bottom_list_item}>
                <span>Наручні годинники</span>
              </li>
              <li className={styles.header_bottom_list_item}>
                <span>Чоловічі</span>
              </li>
              <li className={styles.header_bottom_list_item}>
                <span>Жіночі</span>
              </li>
              <li className={styles.header_bottom_list_item}>
                <span>Інтер'єрні годинники</span>
              </li>
            </ul>
          </div>
        </Container>
      </heder>
      <main>{children}</main>
    </Container>
  );
}
