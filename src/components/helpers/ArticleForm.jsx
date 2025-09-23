import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Tag from "./Tag";

function ArticleForm({ initialValues = {}, onSubmit, submitText }) {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [body, setBody] = useState(initialValues.body || "");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://realworld.habsida.net/api/tags")
      .then((res) => res.json())
      .then((data) => setTags(data.tags))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, body });
  };

  return (
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
          {submitText}
        </Button>
      </div>
    </form>
  );
}

export default ArticleForm;
