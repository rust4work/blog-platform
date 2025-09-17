import React, { useState, useEffect } from "react";
import { useOutletContext, Navigate, useNavigate } from "react-router-dom";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";
import Tag from "../components/helpers/Tag";

function NewPost() {
  const token = localStorage.getItem("token");
  const { user } = useOutletContext();
  const navigate = useNavigate();

  // состояния для формы
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);

  // обработка сабмита
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://realworld.habsida.net/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          article: {
            title,
            description,
            body,
            tagList: [], // можно прикрутить выбранные теги
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
      navigate(`/articles/${data.article.slug}`);
    } catch (err) {
      console.error("Сеть упала:", err);
    }
  };

  // загрузка доступных тегов
  useEffect(() => {
    fetch("https://realworld.habsida.net/api/tags")
      .then((response) => response.json())
      .then((data) => {
        setTags(data.tags);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!user) return <Navigate to="/sign-in" replace />;

  return (
    <div className="newpost--wrapper">
      <form className="newpost--form" onSubmit={handleSubmit}>
        <Input
          placeholderText="Title"
          name="title"
          width="100%"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholderText="Short description"
          name="description"
          width="100%"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <textarea
          name="body"
          id="comment--area"
          placeholder="Input your text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <div className="newpost--tags">
          <div className="tagList">
            {tags.slice(0, 6).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="form-buttons">
          <Button type="submit" withIcon={false}>
            Publish article
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
