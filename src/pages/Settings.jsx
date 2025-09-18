import { useEffect } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typography from "../components/helpers/Typography";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";
import Loader from "../components/helpers/Loader";

function Settings() {
  const { user, setUser, loadingUser } = useOutletContext();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      bio: "",
      email: "",
      image: "",
      username: "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
        image: user.image || "",
      });
    }
  }, [user, reset]);

  if (loadingUser) return <Loader />;

  if (!user) return <Navigate to="/sign-in" replace />;

  const onSubmit = async (formData) => {
    try {
      const token = localStorage.getItem("token");

      const payload = {
        username: formData.username,
        email: formData.email,
        bio: formData.bio,
        image: formData.image,
      };

      const res = await fetch("https://realworld.habsida.net/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          if (result.errors.body) {
            const bodyMsg = result.errors.body[0] || "Failed to update profile";

            if (bodyMsg.toLowerCase().includes("email")) {
              setError("email", {
                type: "server",
                message: "This email is already taken",
              });
            } else if (bodyMsg.toLowerCase().includes("username")) {
              setError("username", {
                type: "server",
                message: "This username is already taken",
              });
            } else {
              setError("root", { type: "server", message: bodyMsg });
            }
          }
        }
        return;
      }

      setUser(result.user || result);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setError("root", {
        type: "server",
        message: "Error updating profile: " + err.message,
      });
    }
  };

  return (
    <div className="settings--wrapper">
      <Typography variant="h1" color="#333333">
        Your Settings
      </Typography>

      <form className="settings--form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="username"
          placeholderText="Username"
          {...register("username", {
            required: "Username is required",
            validate: (value) =>
              value?.toString().trim().length > 0 || "Username cannot be empty",
          })}
          width="100%"
          error={!!errors.username}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}

        <Input
          placeholderText="Email Address"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          width="100%"
          error={!!errors.email}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <textarea
          {...register("bio")}
          id="comment--area"
          placeholder="Input your bio"
        ></textarea>

        <Input
          placeholderText="Avatar image URL"
          {...register("image")}
          width="100%"
          error={!!errors.image}
        />
        {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}

        {errors.root && (
          <div style={{ color: "red", marginTop: "8px" }}>
            {errors.root.message}
          </div>
        )}

        <div className="form-buttons">
          <Button type="submit" withIcon={false}>
            Update Settings
          </Button>

          <Button
            variant="warning-small"
            withIcon={false}
            onClick={() => {
              localStorage.removeItem("token");
              setUser(null);
            }}
          >
            or click here to logout
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
