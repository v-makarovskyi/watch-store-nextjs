import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import HeaderSearchForm from "../../forms/header-search-form/HeaderSearchForm";
import { useSelector } from "react-redux";
import HeaderModal from "./HeaderModal";
import Heart from "../../../svg/heart";
import Cart from "../../../svg/cart";
import styles from "../header.module.scss";

export default function HeaderMiddle({ setShowModal, showModal, width }) {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className={styles.header_middle}>
      <div className={styles.header_middle_logo}>
        <Link href="/">
          <span>WATCH-STORE</span>
        </Link>
      </div>
      <div className={styles.middle_contacts}>
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
            <HeaderModal setShowModal={setShowModal} />
          </div>
        </div>
        <div className={styles.header_middle_contacts_bottom}>
          <button>Замовити зворотній дзвінок </button>
          <form></form>
          <button>Контакти</button>
        </div>
      </div>

      <HeaderSearchForm />

      {width > 992 && (
        <div className={styles.header_middle_icons}>
          <Link href="/wishlist">
            <div className={styles.header_middle_icons_wishlist}>
              <Heart />
              <span>0</span>
            </div>
          </Link>

          <i className="bi bi-person-circle"></i>
          <Link href="/cart">
            <div className={styles.cart}>
              <Cart />
              <span>{cartTotalQuantity}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
