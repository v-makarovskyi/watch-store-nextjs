import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_wrapper_logo}>
          <span>WATCH-STORE</span>
        </div>
        <div className={styles.footer_wrapper_user}>
            <h6>Кабінет покупця</h6>
            <ul>
                <li>Ввійти</li>
                <li>Створити обліковий запис</li>
                <li>Замовлення</li>
                <li>Список побажань</li>
                <li>Cписок порівняння</li>
                <li>Карта сайту</li>
            </ul>
        </div>
        <div className={styles.footer_wrapper_store}>
            <h6>Магазин</h6>
            <ul>
                <li>Контакти</li>
                <li>Договір Публічної Оферти</li>
                <li>Політика конфіденційності</li>
                <li>7 Причин вибрати нас!</li>
                <li>Ремонт годинників</li>
                <li>Система знижок</li>
                <li>Сервісні центри Києва</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
