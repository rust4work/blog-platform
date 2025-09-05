import { useState, useEffect } from "react";
import BannerDefault from "../components/BannerDefault";
import Sidebar from "../components/helpers/Sidebar";
import Post from "../components/helpers/Post";
import PaginationBar from "../components/helpers/PaginationBar";
import Loader from "../components/helpers/Loader";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    fetch("https://realworld.habsida.net/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.articles);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      <BannerDefault />

      {loading ? (
        <Loader /> // показывается только под баннером
      ) : (
        <>
          <Sidebar />
          <div className="posts-list">
            {currentPosts.map((post) => (
              <Post key={post.slug} postData={post} />
            ))}
          </div>

          <PaginationBar
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </>
  );
}
export default MainPage;
