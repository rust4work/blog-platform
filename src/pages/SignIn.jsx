import React, { useState } from "react";
import Typography from "../components/helpers/Typography";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoginError(""); // сброс ошибки

    try {
      const res = await fetch("https://realworld.habsida.net/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            email: data.email,
            password: data.password,
          },
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.errors?.body?.[0] || "Login failed");
      }

      console.log("Login success:", result.user);

      // например, сохраняем токен:
      localStorage.setItem("token", result.user.token);
      navigate("/profile-page");
    } catch (err) {
      console.error("Ошибка входа:", err.message);
      setLoginError(err.message);
    }
  };

  return (
    <form
      className="signin--wrapper signup--wrapper"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h1">Sign In</Typography>

      <Input
        placeholderText="Email"
        width="480px"
        height="48px"
        {...register("email", { required: "Email is required" })}
      />
      {errors.username && (
        <span style={{ color: "red" }}>{errors.username.message}</span>
      )}

      <Input
        placeholderText="Password"
        width="480px"
        height="48px"
        type="password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}

      {loginError && <span style={{ color: "red" }}>{loginError}</span>}

      <Button variant="primary-large" withIcon={false} type="submit">
        Sign in
      </Button>

      <Link to="/sign-up">
        <Button variant="secondary-large" withIcon={false} type="button">
          Sign up
        </Button>
      </Link>
    </form>
  );
}

export default SignIn;
