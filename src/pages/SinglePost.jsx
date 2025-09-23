import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/helpers/Loader";
import BannerArticle from "../components/BannerArticle";
import Typography from "../components/helpers/Typography";
import Tag from "../components/helpers/Tag";
import UserInfo from "../components/helpers/UserInfo";
import Button from "../components/helpers/Button";

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://realworld.habsida.net/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.article);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading) return <Loader />;
  if (!post) return <p>Post not found</p>;

  const tags = post.tagList || [];

  const token = localStorage.getItem("token");
  const likeHandler = async () => {
    if (!token) return alert("You must be logged in to favourite an article");

    try {
      const res = await fetch(
        `https://realworld.habsida.net/api/articles/${slug}/favorite`,
        {
          method: post.favorited ? "DELETE" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Ошибка лайка:", errorData);
        return;
      }

      const data = await res.json();
      setPost(data.article);
    } catch (err) {
      console.error("Сеть упала:", err);
    }
  };

  return (
    <>
      <BannerArticle article={post} />

      <div className="single-post--wrapper">
        <Typography variant="regular">{post.body}</Typography>
        <div className="tagList">
          {tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        {post && (
          <div className="singlepost--footer">
            <UserInfo
              userName={post.author.username}
              userImage={post.author.image}
              userDate={new Date(post.createdAt).toLocaleDateString()}
            />
            <Button
              variant={post.favorited ? "warning-small" : "primary-small"}
              withIcon={false}
              onClick={likeHandler}
            >
              {post.favorited
                ? `Unfavourite (${post.favoritesCount})`
                : `Favourite (${post.favoritesCount})`}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePost;
