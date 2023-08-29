import React from 'react'
import Link from 'next/link'
import HeaderSearchForm from '../../forms/header-search-form/HeaderSearchForm'
import HeaderModal from './HeaderModal'
import styles from '../header.module.css'

export default function HeaderMiddle({ setShowModal, showModal }) {
  return (
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
         <HeaderModal setShowModal={setShowModal}/>
        </div>
      </div>
      <div className={styles.header_middle_contacts_bottom}>
        <button>Замовити зворотній дзвінок </button>
        <form></form>
        <button>Контакти</button>
      </div>
    </div>

    <HeaderSearchForm />

    <div className={styles.header_middle_icons}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="red"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>

      <i className="bi bi-suit-heart"></i>
      <i className="bi bi-person-circle"></i>
      <div className={styles.cart}>
        <i className="bi bi-bag"></i>
        <span>0</span>
      </div>
    </div>
  </div>
  )
}
