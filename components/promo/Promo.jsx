import styles from "./promo.module.css";

const promo = [
  {
    id: 1,
    content: "1+1 Другий годинник у подарунок!",
    image: "/images/promo/promo1.webp",
  },
  { id: 2, content: "INGERSOLL -50%", image: "/images/promo/promo2.webp" },
  {
    id: 3,
    content: "Розпродаж Pierre Lannier -40%",
    image: "/images/promo/promo3.webp",
  },
  {
    id: 4,
    content: "Знижка -15% на день народження!",
    image: "/images/promo/promo4.webp",
  },
];

export default function Promo() {
  return (
    <div className={styles.promo}>
      <h4 className={styles.promo_title}>Нові Промо-акції</h4>
      <div className={styles.promo_wrapper}>
        {promo.map((p) => (
          <div className={styles.promo_wrapper_card}>
            <div className={styles.promo_img_container}>
              <img src={p.image} />
            </div>
            <p className={styles.promo_wrapper_card_content}>{p.content}</p>
          </div>
        ))}
      </div>
      <button className={styles.promo_btn}>СПИСОК УСІХ ПРОМО-АКЦІЙ</button>
    </div>
  );
}
