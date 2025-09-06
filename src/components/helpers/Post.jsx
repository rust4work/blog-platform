import { Link } from "react-router-dom";
import Button from "./Button";
import Typography from "./Typography";
import Tag from "./Tag";
import UserInfo from "./UserInfo";

function Post({ postData }) {
  const {
    slug,
    favoritesCount,
    title,
    description,
    tagList,
    author,
    createdAt,
  } = postData;

  return (
    <Link to={`/article/${slug}`} className="post-link">
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
    </Link>
  );
}

export default Post;
