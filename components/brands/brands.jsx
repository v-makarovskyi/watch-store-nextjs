import styles from "./brands.module.scss";

const brands = [
  { id: 1, image: "/images/brands/atlantic.webp" },
  { id: 2, image: "/images/brands/casio_logo.webp" },
  { id: 3, image: "/images/brands/hamilton.webp" },
  { id: 4, image: "/images/brands/Longines.webp" },
  { id: 5, image: "/images/brands/Seiko.webp" },
  { id: 6, image: "/images/brands/tissot.webp" },
];

export default function Brands() {
  return (
    <div className={styles.brands}>
      <h4 className={styles.title}>Популярні бренди</h4>
      <div className={styles.wrapper}>
        {brands.map((brand) => (
          <div key={brand.id} className={styles.img_container}>
            <img
              src={brand.image}
              className={styles.brands_img}
              alt="img-brand"
            />
          </div>
        ))}
      </div>
      <p className={styles.bottom}>
        Бережіть кожну мить, кожну посмішку, хвилину, день. Наповнюйте їх
        коханням, не баріться, серце рахує так швидко...
      </p>
    </div>
  );
}
