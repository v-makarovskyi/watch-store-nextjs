import React from 'react'
import styles from "../header.module.css";

export default function HeaderModal({ setShowModal }) {
  return (
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
  )
}
