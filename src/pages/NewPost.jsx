import React from "react";
import { useOutletContext, Navigate, useNavigate } from "react-router-dom";
import Loader from "../components/helpers/Loader";
import ArticleForm from "../components/helpers/ArticleForm";

function NewPost() {
  const { user, loadingUser } = useOutletContext();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (loadingUser) return <Loader />;
  if (!user) return <Navigate to="/sign-in" replace />;

  const handleSubmit = async (values) => {
    try {
      const res = await fetch("https://realworld.habsida.net/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          article: {
            ...values,
            tagList: [],
          },
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Ошибка:", errorData);
        return;
      }

      const data = await res.json();
      alert("Статья успешно создана!");
      navigate(`/article/${data.article.slug}`);
    } catch (err) {
      console.error("Сеть упала:", err);
    }
  };

  return (
    <div className="newpost--wrapper">
      <ArticleForm onSubmit={handleSubmit} submitText="Publish article" />
    </div>
  );
}

export default NewPost;
