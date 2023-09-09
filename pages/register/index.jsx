import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { GoogleButton } from "../../components/button/GoogleButton";
import styles from "./register.module.scss";

const RegisterPage = () => {
  return (
    <Layout>
      <Head>
        <title>Регистрация</title>
      </Head>
      <Container fluid className={styles.container}>
        <Row className={styles.wrapper}>
          <Col lg={4} className={styles.content_wrapper}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4 className={styles.title}>Создать учетную запись</h4>
              <h6 className={styles.subtitle}>
                Здесь можно создать аккаунт WatchStore
              </h6>
              <p className={styles.login}>
                Есть аккаунт? <Link href="/login"><span>Войти на сайт</span></Link>
              </p>
              <GoogleButton />
            </div>

            <Form style={{ textAlign: "start" }} className="pt-3">
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <FloatingLabel controlId="floatingInput" label="Имя">
                  <Form.Control type="text" placeholder="Введите ваше имя" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <FloatingLabel controlId="floatingInput" label="Фамилия">
                  <Form.Control
                    type="text"
                    placeholder="Введите вашу фамилию"
                  />
                </FloatingLabel>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                <FloatingLabel controlId="floatingInput" label="Номер телефона">
                  <Form.Control type="tel" />
                </FloatingLabel>
                <Form.Text className="text-muted">
                  формат: + 38 (0XX) XXX-XX-XX
                </Form.Text>
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Электронная почта"
                >
                  <Form.Control type="email" placeholder="Введите email" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingInput" label="Пароль ">
                  <Form.Control type="password" placeholder="Введите пароль" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Повторите пароль"
                >
                  <Form.Control
                    type="password"
                    placeholder="Повторите пароль"
                  />
                </FloatingLabel>
              </Form.Group>
              <Button variant="success" className='w-100'>Зарегистрироваться</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default RegisterPage;
