// MainPage.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BannerDefault from "../components/BannerDefault";
import Sidebar from "../components/helpers/Sidebar";
import Post from "../components/helpers/Post";
import PaginationBar from "../components/helpers/PaginationBar";
import Loader from "../components/helpers/Loader";

function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1; // 👈 берём страницу из URL
  const [currentPage, setCurrentPage] = useState(pageParam);

  const postsPerPage = 3;

  useEffect(() => {
    setLoading(true);
    const offset = (currentPage - 1) * postsPerPage;

    fetch(
      `https://realworld.habsida.net/api/articles?limit=${postsPerPage}&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.articles);
        setTotalPosts(data.articlesCount);
        setLoading(false);
      })
      .catch(console.error);
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page }); // 👈 записываем в URL
  };

  return (
    <>
      <BannerDefault />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div className="posts-list">
            {posts.map((post) => (
              <Post key={post.slug} postData={post} />
            ))}
          </div>

          <PaginationBar
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default MainPage;
