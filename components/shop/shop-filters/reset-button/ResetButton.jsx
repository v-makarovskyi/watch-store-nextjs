import { useRouter } from "next/router";
import styles from './resetbutton.module.css'

export const ResetButton = ({ pathname }) => {
    const router = useRouter();
    return (
      <button
        className={styles.resetButton}
        onClick={() => {
          router.push(pathname, undefined, { scroll: false });
        }}
      >
        Сбросить фильтры
      </button>
    );
  };