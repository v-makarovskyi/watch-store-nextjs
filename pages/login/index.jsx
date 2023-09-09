import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Form, FloatingLabel, Button } from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { GoogleButton } from "../../components/button/GoogleButton";
import styles from "./login.module.scss";

const LoginPage = () => {
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
              <h4 className={styles.title}>Войти</h4>
              <h6 className={styles.subtitle}>
                Войти на WatchStore
              </h6>
              <p className={styles.login}>
                Нет аккаунта? <Link href="/register"><span>Зарегистрироваться</span></Link>
              </p>
              <GoogleButton />
            </div>

            <Form style={{ textAlign: "start" }} className="pt-3">
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
              <Button variant="success" className='w-100'>Войти</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default LoginPage;
