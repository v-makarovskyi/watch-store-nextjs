import Image from "next/image";
import styles from "./categories.module.css";

const categories = [
  { id: 1, title: "ЧОЛОВІЧІ", image: "/images/home_categoties/man.jpg" },
  { id: 2, title: "ЖІНОЧІ", image: "/images/home_categoties/woman.jpg" },
  { id: 3, title: "КЛАСИЧНІ", image: "/images/home_categoties/sport.jpg" },
  { id: 4, title: "СПОРТИВНІ", image: "/images/home_categoties/classic.jpg" },
];

export default function Categories() {
  return (
    <div className={styles.categories}>
      <h4 className={styles.categories_title}>
        Інтернет-магазин оригінальних годинників і аксесуарів
      </h4>
      <div className={styles.categories_wrapper}>
        {categories.map((category) => (
          <div className={styles.categories_card} key={category.id}>
            <p className={styles.categories_card_title}>{category.title}</p>
            <img
              className={styles.categories_card_img}
              src={category.image}
              width='100%'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
