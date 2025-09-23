import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/helpers/Loader";
import ArticleForm from "../components/helpers/ArticleForm";

function EditPage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://realworld.habsida.net/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!article) return <Loader />;

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(
        `https://realworld.habsida.net/api/articles/${slug}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ article: values }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Ошибка:", errorData);
        return;
      }

      const data = await res.json();
      alert("Статья обновлена!");
      navigate(`/article/${data.article.slug}`);
    } catch (err) {
      console.error("Сеть упала:", err);
    }
  };

  return (
    <div className="newpost--wrapper">
      <ArticleForm
        initialValues={article}
        onSubmit={handleSubmit}
        submitText="Update article"
      />
    </div>
  );
}

export default EditPage;
