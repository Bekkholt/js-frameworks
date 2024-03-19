import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";

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
  }

  return (
    <S.contact>
      <S.form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Full name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input placeholder="Subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
        <input
          placeholder="Email"
          {...register("email", {
            pattern: /[A-Za-z]{3}/,
          })}
        />
        <p>{errors.email?.message}</p>
        <S.message placeholder="Message" {...register("body")} />
        <p>{errors.body?.message}</p>
        <input type="submit" />
      </S.form>
    </S.contact>
  );
}
