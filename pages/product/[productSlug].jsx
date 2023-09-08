import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { wrapper } from "../../redux/store";
import Layout from "../../components/layout/Layout";
import { Row, Col, Breadcrumb, Nav } from "react-bootstrap";
import Button from "../../components/button/Button";
import ProductSlider from "../../components/productSlider/ProductSlider";
import styles from "./product.module.css";
import {
  getRunningQueriesThunk,
  getSingleWatch,
  useGetSingleWatchQuery,
} from "../../redux/watchsApi";
import { useRouter } from "next/router";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params, query }) => {
      store.dispatch(getSingleWatch.initiate(query.productSlug));

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);

export default function ProductSinglePage() {
  const router = useRouter();
  const { productSlug } = router.query;
  const { data, isError, isLoading, isFetching } = useGetSingleWatchQuery(productSlug);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Layout>
      <div className={styles.product_wrapper}>
        <Row className={styles.product_container_top}>
          <Col lg={5}>
            <Breadcrumb
              style={{
                fontSize: "0.8rem",
                color: "#bab6b6",
                paddingTop: "2rem",
              }}
            >
              <Breadcrumb.Item>Головна</Breadcrumb.Item>
              <Breadcrumb.Item>Бренди</Breadcrumb.Item>
              <Breadcrumb.Item>Tissot</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.product_container_top_img_container}>
              {data?.is_active ? (
                <span className={styles.product_container_top_instock}>
                  У НАЯВНОСТІ
                </span>
              ) : (
                <span
                  className={styles.product_container_top_instock}
                  style={{ background: "crimson" }}
                >
                  У НАЯВНОСТІ
                </span>
              )}

             <ProductSlider images={data ? data.watch_image : []} />
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.product_container_top_description}>
              <h3 className={styles.product_container_top_description_title}>
                {data?.title} - {data?.model}
              </h3>
              <p className={styles.product_container_top_description_articul}>
                арт. <span>{data?.model}</span>
              </p>
              <p className={styles.product_container_top_description_price}>
                <span>{data?.price}</span> грн
              </p>
              <div className={styles.product_container_top_description_btns}>
                <Button
                  className={styles.product_container_top_description_btns_btn}
                >
                  У КОШИК
                </Button>
                <Button
                  className={`${styles.product_container_top_description_btns_btn} ${styles.credit_btn}`}
                >
                  ПРИДБАТИ У РОЗСТРОЧКУ
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={styles.product_container_bottom}>
          <Nav variant="tabs" defaultActiveKey="link-2" style={{border:'none'}}>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={() => setActiveIndex(0)}>
                Опис
              </Nav.Link>
              <div
                className={
                  activeIndex === 0
                    ? styles.product_container_bottom_description
                    : styles.product_container_bottom_hidden
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.description),
                  }}
                ></div>
              </div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={() => setActiveIndex(1)}>
                Характеристики
              </Nav.Link>
              <div
                className={
                  activeIndex === 1
                    ? styles.product_container_bottom_characters
                    : styles.product_container_bottom_hidden
                }
              >
                <h6
                  className={styles.product_container_bottom_characters_title}
                >
                  Особливості моделі
                </h6>
                <ul className={styles.product_container_bottom_characters_list}>
                  <li
                    className={
                      styles.product_container_bottom_characters_list_item
                    }
                  >
                    <div
                      className={
                        styles.product_container_bottom_characters_list_item_element
                      }
                    >
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_key
                        }
                      >
                        Назва моделі:
                      </p>
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_value
                        }
                      >
                        {data?.title} - {data?.model}
                      </p>
                    </div>
                  </li>
                  <li
                    className={
                      styles.product_container_bottom_characters_list_item
                    }
                  >
                    <div
                      className={
                        styles.product_container_bottom_characters_list_item_element
                      }
                    >
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_key
                        }
                      >
                        Бренд:
                      </p>
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_value
                        }
                      >
                        {data?.brand}
                      </p>
                    </div>
                  </li>
                  <li
                    className={
                      styles.product_container_bottom_characters_list_item
                    }
                  >
                    <div
                      className={
                        styles.product_container_bottom_characters_list_item_element
                      }
                    >
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_key
                        }
                      >
                        Тип:
                      </p>
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_value
                        }
                      >
                        {data?.watch_type} часы
                      </p>
                    </div>
                  </li>
                  <li
                    className={
                      styles.product_container_bottom_characters_list_item
                    }
                  >
                    <div
                      className={
                        styles.product_container_bottom_characters_list_item_element
                      }
                    >
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_key
                        }
                      >
                        Браслет:
                      </p>
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_value
                        }
                      >
                        {data?.wristband}
                      </p>
                    </div>
                  </li>
                  <li
                    className={
                      styles.product_container_bottom_characters_list_item
                    }
                  >
                    <div
                      className={
                        styles.product_container_bottom_characters_list_item_element
                      }
                    >
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_key
                        }
                      >
                        Скло:
                      </p>
                      <p
                        className={
                          styles.product_container_bottom_characters_list_item_element_value
                        }
                      >
                        {data?.glass}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Відгуки</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </div>
    </Layout>
  );
}
