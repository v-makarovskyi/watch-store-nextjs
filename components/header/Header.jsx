import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { clearSortBy } from "../../redux/sortSlice";
import HeaderTop from "./header-top/HeaderTop";
import HeaderMiddle from "./header-middle/HeaderMiddle";
import HeaderBottom from "./header-bottom/HeaderBottom";
import styles from "./header.module.scss";
import Link from "next/link";
import {
  useGetCategoriesQuery,
  useGetBrandsQuery,
} from "../../redux/watchsApi";
import axiosElement from "../../utils/axios-element";
import HeaderSearchForm from "../forms/header-search-form/HeaderSearchForm";

const languages = [
  { id: 1, flag: "🇺🇦", title: "Українська" },
  { id: 2, flag: "🇬🇧", title: "English" },
  { id: 3, flag: "🇷🇺", title: "Русский" },
];

export default function Header() {
  const { data: categories } = useGetCategoriesQuery();
  const { data: brands } = useGetBrandsQuery();

  const [currentLanguage, setCurrentLanguage] = useState({
    id: 1,
    flag: "🇺🇦",
    title: "Українська",
  });
  const [showLanguagesList, setShowLangugesList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState({});
  const [showBrands, setShowBrands] = useState(false);
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const handleClientWidth = () => {
      setWidth(document.body.clientWidth);
    };
    window.addEventListener("resize", handleClientWidth);
    return () => window.removeEventListener("resize", handleClientWidth);
  }, []);

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
    <div className={styles.header}>
      <Container fluid className={styles.container}>
        <HeaderTop
          languages={languages}
          onHandleSelectLanguage={handleSelectLanguage}
          setShowLangugesList={setShowLangugesList}
          showLanguagesList={showLanguagesList}
          currentLanguage={currentLanguage}
        />
        <HeaderMiddle setShowModal={setShowModal} showModal={showModal} width={width} />
        <HeaderBottom
          width={width}
          categories={categories}
          brands={brands}
          activeCategory={activeCategory}
          onHandleActiveCategory={handleActiveCategory}
          showBrands={showBrands}
          setShowBrands={setShowBrands}
        />
      </Container>
    </div>
  );
}
