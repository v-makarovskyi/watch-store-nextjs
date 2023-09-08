import React from "react";
import { Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearSortBy } from "../../../redux/sortSlice";
import Heart from "../../../svg/heart";
import Cart from "../../../svg/cart";
import Link from "next/link";
import styles from "../header.module.scss";

export default function HeaderBottom({
  categories,
  brands,
  width,
  activeCategory,
  onHandleActiveCategory,
  showBrands,
  setShowBrands,
}) {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  console.log(width)

  return (
    <Row className={styles.bottom}>
       <Navbar expand="lg" className={styles.bottom_content}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Бренд" id="basic-nav-dropdown" className={styles.categoryLink}>
              {brands?.map((item, index) => (
                <Link href={`/brand/${item.slug}`} legacyBehavior passHref>
                  <NavDropdown.Item key={index}>{item.title}</NavDropdown.Item>
                </Link>
              ))}
            </NavDropdown>
            {categories?.map((category) =>
                <Link href={`/categories/${category.slug}`} legacyBehavior passHref>
                   <Nav.Link className={styles.categoryLink}>{category.name}</Nav.Link>
                </Link>
              )
            }
          </Nav>
        </Navbar.Collapse>
        {
          width <= 992 && (
            <div className={styles.header_middle_icons}>
            <Link href="/wishlist">
              <div className={styles.header_middle_icons_wishlist}>
                <Heart />
                <span>0</span>
              </div>
            </Link>
    
            <i className="bi bi-person-circle"></i>
            <Link href='/cart'>
               <div className={styles.cart}>
                <Cart />
              <span>{cartTotalQuantity}</span>
            </div>
            </Link>
           
          </div>
          )
        }
      </Container>
    </Navbar>
    </Row>
   
  );
}
