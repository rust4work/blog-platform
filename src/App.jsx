// import { useState } from "react";
import BannerDefault from "./components/BannerDefault";
import Typography from "./components/helpers/Typography";
import BannerArticle from "./components/BannerArticle";
import UserInfo from "./components/helpers/UserInfo";
import Button from "./components/helpers/Button";
import BannerUserInfo from "./components/BannerUserInfo";
import Icon from "./components/helpers/Icon";
import Input from "./components/helpers/Input";
import NavBarFrame from "./components/helpers/NavBarFrame";
import Tab from "./components/helpers/Tab";
import PaginationBar from "./components/helpers/PaginationBar";
import Post from "./components/helpers/Post";
import Sidebar from "./components/helpers/Sidebar";

import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://realworld.habsida.net/api/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        setPosts(data.articles); // массив
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <NavBarFrame />
      <BannerArticle />
      <BannerDefault />
      <BannerUserInfo />
      <UserInfo />
      <Sidebar />
      <Input />
      <PaginationBar />
      {posts.slice(0, 5).map((post) => (
        <Post key={post.slug} postData={post} />
      ))}
    </>
  );
}

export default App;
