import React from "react";
import Typography from "./helpers/Typography";
import UserInfo from "./helpers/UserInfo";

function BannerArticle({ article }) {
  if (!article) return null;

  return (
    <div className="bannerArticle">
      <div className="bannerArticle--wrapper">
        {/* Заголовок статьи */}
        <Typography variant="h1" color="white">
          {article.title}
        </Typography>

        {/* Автор и дата */}
        <UserInfo
          userName={article.author.username}
          userImage={article.author.image}
          userDate={new Date(article.createdAt).toLocaleDateString()}
        />
      </div>
    </div>
  );
}

export default BannerArticle;
