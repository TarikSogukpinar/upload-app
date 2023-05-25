import React from "react";
import dynamic from "next/dynamic";

const RegisterPage = dynamic(() => import("../../components/RegisterPage"));

export default function Register() {
  return <RegisterPage />;
}
