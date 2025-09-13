import React from "react";
import { useForm } from "react-hook-form";
import Typography from "../components/helpers/Typography";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://realworld.habsida.net/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Ошибка API:", errData);
        throw new Error("Ошибка при регистрации");
      }

      const result = await res.json();
      console.log("Успех:", result);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="signup--wrapper">
      <Typography variant="h1">Sign Up</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholderText="UserName"
          width="480px"
          height="48px"
          {...register("username", { required: "Enter username" })}
        />
        {errors.username && <p>{errors.username.message}</p>}

        <Input
          placeholderText="Email address"
          width="480px"
          height="48px"
          {...register("email", {
            required: "Input email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          placeholderText="Password"
          type="password"
          width="480px"
          height="48px"
          {...register("password", {
            required: "Enter password",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Input
          placeholderText="Repeat Password"
          type="password"
          width="480px"
          height="48px"
          {...register("repeatPassword", {
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

        <Button
          variant="primary-large"
          withIcon={false}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Sign up"}
        </Button>
      </form>
    </div>
  );
}

export default SignUpPage;
