import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Subject should be at least 3 characters.")
      .required("You have to enter a subject"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("You have to enter an email"),
    body: yup
      .string()
      .min(3, "Your message should have at least 3 characters.")
      .required("You have to enter a message"),
  })
  .required();

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    alert(`Message submitted successfully`);
  }

  return (
    <S.contact>
      <S.form onSubmit={handleSubmit(onSubmit)}>
        <S.inputs placeholder="Full name" {...register("fullName")} />
        <S.error>{errors.fullName?.message}</S.error>
        <S.inputs placeholder="Subject" {...register("subject")} />
        <S.error>{errors.subject?.message}</S.error>
        <S.inputs
          placeholder="Email"
          {...register("email", {
            pattern: /[A-Za-z]{3}/,
          })}
        />
        <S.error>{errors.email?.message}</S.error>
        <S.message placeholder="Message" {...register("body")} />
        <S.error>{errors.body?.message}</S.error>
        <S.ButtonDiv>
          <S.SubmitButton type="submit" />
          <S.BackButton>
            <Link to={"/"}>Go back</Link>
          </S.BackButton>
        </S.ButtonDiv>
      </S.form>
    </S.contact>
  );
}
