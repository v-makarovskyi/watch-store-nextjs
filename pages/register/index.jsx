import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { notifySuccess, notifyError } from "../../utils/toast";
import { useRegisterUserMutation } from "../../redux/auth/authApi";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import Layout from "../../components/layout/Layout";
import { GoogleButton } from "../../components/button/GoogleButton";
import styles from "./register.module.scss";

const schema = Yup.object().shape({
  username: Yup.string().required("* Обязательное поле").label("Имя"),
  lastName: Yup.string().required("* Обязательное поле").label("Фамилия"),
  email: Yup.string()
    .required("* Обязательное поле")
    .email("Почта должна быть в формате example@test.de")
    .label("Электронная почта"),
  password: Yup.string()
    .required()
    .min(6, "Пароль слишком короткий — минимум 6 символов.")
    .matches(/[a-zA-Z]/, "Пароль может содержать только латинские буквы")
    .label("Пароль"),
  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать!")
    .label("Повторите пароль"),
});

const RegisterPage = () => {
  const router = useRouter()
  const [registerUser, {}] = useRegisterUserMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    registerUser({
      username: data.username,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    }).then((result) => {
      if(result?.error) {
        notifyError('Регистрация не удалась!')
      } else {
        notifySuccess(result?.data?.message)
        router.push('/login')
      }
    })
    reset()
  }

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
                Есть аккаунт?{" "}
                <Link href="/login">
                  <span>Войти на сайт</span>
                </Link>
              </p>
              <GoogleButton />
            </div>

            <Form
              onSubmit={handleSubmit(onSubmit)}
              style={{ textAlign: "start" }}
              className="pt-3"
            >
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <FloatingLabel controlId="nameInput" label="Имя">
                  <Form.Control
                    {...register("username")}
                    name="username"
                    type="text"
                    placeholder="Введите ваше имя"
                  />
                </FloatingLabel>
                <Form.Text>{errors.name?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <FloatingLabel controlId="lastNameInput" label="Фамилия">
                  <Form.Control
                    {...register("lastName")}
                    name="lastName"
                    type="text"
                    placeholder="Введите вашу фамилию"
                  />
                </FloatingLabel>
                <Form.Text>{errors.lastName?.message}</Form.Text>
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
                <FloatingLabel controlId="emailInput" label="Электронная почта">
                  <Form.Control
                    {...register("email", { required: "Email обязательно!" })}
                    name="email"
                    type="email"
                    placeholder="Введите email"
                  />
                </FloatingLabel>
                <Form.Text>{errors.email?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="passwordInput" label="Пароль ">
                  <Form.Control
                    {...register("password")}
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                  />
                </FloatingLabel>
                <Form.Text>{errors.password?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Повторите пароль"
                >
                  <Form.Control
                    {...register("passwordConfirm")}
                    name="passwordConfirm"
                    type="password"
                    placeholder="Повторите пароль"
                  />
                </FloatingLabel>
                <Form.Text>{errors.passwordConfirm?.message}</Form.Text>
              </Form.Group>
              <Button type="submit" variant="success" className="w-100">
                Зарегистрироваться
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default RegisterPage;
