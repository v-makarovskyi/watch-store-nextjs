import React from 'react'
import styles from '../../pages/cart/cart.module.css'

export default function CartTotalInfo({ totalQty, totalAmount, totalDiscount }) {
    
return (
    <div className={styles.cart_total}>
            <div className={styles.cart_total_detail}>
                <div className={styles.cart_sum}>
                    <span>Загальна кількість:</span>
                    <span>{totalQty}</span>
                </div>
                <div className={styles.cart_sum}>
                    <span>Знижка:</span>
                    <span>{totalDiscount}</span>
                </div>
                <div className={styles.cart_delivery}>
                    <span>Вартість доставки:</span>
                    <span><i className="bi bi-airplane-fill" style={{color: 'crimson'}}></i>{' '}Розрахувати</span>
                </div>
                {/* <div className={styles.cart_discount}>
                    <span>Знижка:</span>
                    <span>{watch?.discount} %</span>
                </div> */}
            </div>
            <div className={styles.cart_total_all}>
                <span>Підсумкова вартість:</span>
                <span style={{fontSize:'1.3rem'}}>{totalAmount} грн</span>
            </div>
        </div>
  )
}
