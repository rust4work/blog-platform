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
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleServerErrors = (errorsObj) => {
    if (errorsObj.body) {
      const bodyMsg = errorsObj.body[0] || "Registration failed";

      if (bodyMsg.toLowerCase().includes("email")) {
        setError("email", {
          type: "server",
          message: "This email is already registered",
        });
      } else if (bodyMsg.toLowerCase().includes("username")) {
        setError("username", {
          type: "server",
          message: "This username is already taken",
        });
      } else {
        setError("root", { type: "server", message: bodyMsg });
      }
    } else {
      setError("root", { type: "server", message: "Unknown server error" });
    }
  };

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

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          handleServerErrors(result.errors);
        }
        return;
      }

      console.log("Успех:", result);
    } catch (err) {
      console.error("Ошибка регистрации:", err.message);
      setError("root", {
        type: "server",
        message: "Something went wrong. Try again.",
      });
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
          {...register("username", {
            required: "Enter username",
            minLength: { value: 3, message: "Minimum  3 character" },
            maxLength: { value: 20, message: "Maximum  20 character" },
          })}
          error={!!errors.username}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}

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
          error={!!errors.email}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <Input
          placeholderText="Password"
          type="password"
          width="480px"
          height="48px"
          {...register("password", {
            required: "Enter password",
            minLength: { value: 6, message: "Minimum 6 characters" },
            maxLength: { value: 40, message: "Maximum 40 characters" },
          })}
          error={!!errors.password}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <Input
          placeholderText="Repeat Password"
          type="password"
          width="480px"
          height="48px"
          {...register("repeatPassword", {
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          error={!!errors.repeatPassword}
        />
        {errors.repeatPassword && (
          <p style={{ color: "red" }}>{errors.repeatPassword.message}</p>
        )}

        <label className="personal-data--wrapper">
          <input
            type="checkbox"
            id="personal-data"
            {...register("personalData", {
              required: "You must agree to personal data processing",
            })}
          />
          <span>Agreeing to personal data processing</span>
        </label>
        {errors.personalData && (
          <p style={{ color: "red" }}>{errors.personalData.message}</p>
        )}

        {errors.root && (
          <div style={{ color: "red", marginTop: "8px" }}>
            {errors.root.message}
          </div>
        )}

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
