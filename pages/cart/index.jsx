import { useEffect } from "react";
import Link from "next/link";
import ErrorMsg from "../../components/common/errorMsg/ErrorMsg";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout/Layout";
import styles from "./cart.module.css";
import { Breadcrumb } from "react-bootstrap";
import Button from "../../components/button/Button";
import { clearCart } from "../../redux/cartSlice";
import React from "react";
import CartItem from "../../components/cart/CartItem";
import CartTotalInfo from "../../components/cart/CartTotalInfo";

export default function Cart() {
  const dispatch = useDispatch();

  const { cart_items, cartTotalQuantity, cartTotalAmount, cartTotalDiscount } =
    useSelector((state) => state.cart);

  return (
    <Layout>
      <div className={styles.cart_container}>
        <Breadcrumb
          style={{ fontSize: "0.8rem", color: "#bab6b6", paddingTop: "1rem" }}
        >
          <Breadcrumb.Item>Головна</Breadcrumb.Item>
          <Breadcrumb.Item>Вміст кошика</Breadcrumb.Item>
        </Breadcrumb>
        <h3 className={styles.cart_title}>Вміст кошика</h3>
        <div className={styles.cart_btns}>
          <Link href='/'>
             <Button className={styles.cart_btns_store}>Продовжити покупки</Button>
          </Link>
         
          <Button className={styles.cart_btns_order}>
            <i
              class="bi bi-emoji-heart-eyes"
              style={{ marginRight: 5, fontSize: "1rem" }}
            ></i>
            Оформити замовлення
          </Button>
        </div>
        {cart_items?.length === 0 ? (
          <ErrorMsg message='Корзина пуста  🛒'/>
        ) : (
          <>
            <div className={styles.cart_titles}>
              <h6>Товар</h6>
              <h6>Ціна одиниці</h6>
              <h6>Кількість</h6>
              <h6>Знижка</h6>
              <h6>Загальна ціна</h6>
            </div>

            {cart_items?.map((watch) => (
              <>
                <CartItem key={watch.id} watch={watch} />
              </>
            ))}
          </>
        )}

        <CartTotalInfo
          totalQty={cartTotalQuantity}
          totalAmount={cartTotalAmount}
          totalDiscount={cartTotalDiscount}
        />

        <div className={styles.cart_btns}>
          <Link href="/">
            <Button className={styles.cart_btns_store}>
              Продовжити покупки
            </Button>
          </Link>

          <Button
            onClick={() => dispatch(clearCart())}
            className={styles.cart_btns_clear}
          >
            <i className="bi bi-x-circle"></i> Очистити кошик
          </Button>
          <Button className={styles.cart_btns_order}>
            <i
              class="bi bi-emoji-heart-eyes"
              style={{ marginRight: 5, fontSize: "1rem" }}
            ></i>
            Оформити замовлення
          </Button>
        </div>
      </div>
    </Layout>
  );
}
