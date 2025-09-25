import { useNavigate } from "react-router-dom";
import Typography from "./helpers/Typography";
import UserInfo from "./helpers/UserInfo";
import Button from "./helpers/Button";

function BannerArticle({ article }) {
  const navigate = useNavigate();
  if (!article) return null;

  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this article?")) {
      return; // если нажали Cancel — просто выходим
    }

    try {
      const res = await fetch(
        `https://realworld.habsida.net/api/articles/${article.slug}`,
        {
          method: "DELETE",
          headers: { Authorization: `Token ${token}` },
        }
      );

      if (res.ok) {
        navigate("/"); // редирект на главную после удаления
      } else {
        const error = await res.json();
        alert("Ошибка при удалении: " + JSON.stringify(error));
      }
    } catch (err) {
      console.error("Ошибка сети:", err);
    }
  };

  const handleEdit = async () => {
    navigate(`/article/${article.slug}/edit`);
  };

  return (
    <div className="bannerArticle">
      <div className="bannerArticle--wrapper">
        <Typography variant="h1" color="white">
          {article.title}
        </Typography>

        <UserInfo
          userName={article.author.username}
          userImage={article.author.image}
          userDate={new Date(article.createdAt).toLocaleDateString()}
        />
        {token && (
          <div className="buttons--wrapper">
            <Button
              variant="secondary-small"
              withIcon={false}
              onClick={handleEdit}
            >
              Edit post
            </Button>
            <Button
              variant="warning-small"
              withIcon={false}
              onClick={handleDelete}
            >
              Delete post
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BannerArticle;
