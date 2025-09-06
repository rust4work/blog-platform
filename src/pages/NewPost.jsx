import React from "react";
import { useState, useEffect } from "react";
import Input from "../components/helpers/Input";
import Button from "../components/helpers/Button";
import Typography from "../components/helpers/Typography";
import Tag from "../components/helpers/Tag";

function NewPost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь можно собрать данные из инпутов и отправить их
    console.log("Form submitted");
  };

  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://realworld.habsida.net/api/tags")
      .then((response) => response.json())
      .then((data) => {
        setTags(data.tags);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="newpost--wrapper">
      <form className="newpost--form" onSubmit={handleSubmit}>
        <Input placeholderText="Title" name="Title" width="100%" />
        <Input
          placeholderText="Short description"
          type="email"
          name="Short description"
          width="100%"
        />
        <textarea
          name="Input your text"
          id="comment--area"
          placeholder="Input your text"
        ></textarea>
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
