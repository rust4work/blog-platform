import Button from "./Button";
import Typography from "./Typography";
import Tag from "./Tag";
import UserInfo from "./UserInfo";

function Post({ postData }) {
  const { favoritesCount, title, description, tagList, author, createdAt } =
    postData;

  return (
    <div className="post--wrapper">
      <div className="header">
        <UserInfo
          userName={author.username}
          userImage={author.image}
          userDate={new Date(createdAt).toLocaleDateString()}
        />
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
      </div>
    </div>
  );
}

export default Post;
