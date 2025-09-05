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
              userDate={post.author.date}
            />
            <Button variant="primary-small">Favourite Article</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePost;
