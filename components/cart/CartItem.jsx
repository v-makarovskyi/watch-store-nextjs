import React from "react";
import { useDispatch } from "react-redux";
import Minus from "../../svg/minus";
import Plus from "../../svg/plus";
import RemoveBtn from "../../svg/removeBtn";
import { Row, Col } from "react-bootstrap";
import { add_to_cart, removeItem, decrement } from "../../redux/cartSlice"
import styles from "../../pages/cart/cart.module.css";



export default function CartItem({ watch }) {
    const { watch_image, price, brand, model, qty } = watch


    const dispatch = useDispatch()

    function addToCart(item) {
        dispatch(add_to_cart(item))
    }

    function decrementItems(item) {
        dispatch(decrement(item))
    }

    function removeFromCart(item) {
        dispatch(removeItem(item))
    }

  return (
    <Row className={styles.cart_item}>
      <div className={styles.cart_item_content}>
        <div className={styles.basic_wrapper}>
          <button onClick={() => removeFromCart(watch)} className={styles.basic_wrapper_delete_btn}>
            <RemoveBtn />
          </button>
          <div className={styles.cart_item_img_container}>
            <img src={watch_image[0].image} alt={watch_image[0].alt_text} />
          </div>
          <p className={styles.cart_item_brand}>
            {brand}{""}
            <span className={styles.cart_item_model}>{model}</span>
          </p>
        </div>
        <p className={styles.cart_item_price}>{price} грн</p>
        <div className={styles.cart_item_qty}>
          <button onClick={() => addToCart(watch)}>
           <Plus />
          </button>
          <span>{qty}</span>
          <button onClick={() => decrementItems(watch)}>
           <Minus />
          </button>
        </div>
        <p className={styles.cart_item_price}>{watch.discount}%</p>
        <p className={styles.cart_item_price}>{price * qty} грн</p>
      </div>
    </Row>
  );
}
