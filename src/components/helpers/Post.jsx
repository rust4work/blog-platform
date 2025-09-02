import React from "react";
import UserInfo from "./UserInfo";
import Button from "./Button";
import Typography from "./Typography";
import Tag from "./Tag";

function Post({ postData }) {
  const { favoritesCount, title, description, tagList, author, createdAt } =
    postData;

  return (
    <div className="post--wrapper">
      <div className="header">
        <div className="user">
          <img src={author.image} alt={author.username} width={40} />
          <span>{author.username}</span>
        </div>
        <Button variant="secondarySmall">{favoritesCount}</Button>
      </div>

      <div className="main">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="regularGrey" color="grey">
          {description}
        </Typography>

        <div className="tags">
          {tagList?.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </div>

        <Typography variant="small" color="grey">
          {new Date(createdAt).toLocaleDateString()}
        </Typography>
      </div>
    </div>
  );
}

export default Post;
