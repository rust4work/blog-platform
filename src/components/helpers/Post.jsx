import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/article/${slug}`);
  };

  return (
    <div className="post--wrapper">
      <div className="header">
        <UserInfo
          userName={author.username}
          userImage={author.image}
          userDate={new Date(createdAt).toLocaleDateString()}
        />

        {/* лайк работает отдельно */}
        <Button
          variant="secondarySmall"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Лайкнули пост:", slug);
          }}
        >
          {favoritesCount}
        </Button>
      </div>

      {/* кликабельная только основная часть */}
      <div className="main" onClick={openPost}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="regularGrey" color="grey">
          {description}
        </Typography>

        {Array.isArray(tagList) && tagList.length > 0 && (
          <div className="tags">
            {tagList.map((tag, i) => (
              <Tag
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Клик по тегу:", tag);
                }}
              >
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
