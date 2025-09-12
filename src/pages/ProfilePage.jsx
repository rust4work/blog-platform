import React, { useEffect, useState } from "react";
import BannerUserInfo from "../components/BannerUserInfo";
import Tab from "../components/helpers/Tab";
import Sidebar from "../components/helpers/Sidebar";
import { NavLink } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null); // сюда сохраним данные пользователя
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // берём токен из localStorage
    if (!token) {
      setError("No token found, please log in");
      setLoading(false);
      return;
    }

    fetch("https://realworld.habsida.net/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`, // отправляем токен
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.errors?.body?.[0] || "Failed to fetch user");
        }
        setUser(data.user); // сохраняем данные пользователя
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <BannerUserInfo user={user} /> {/* передаём данные пользователя */}
      <div className="feeds">
        <NavLink to="/yourfeed">
          <Tab>Your feed</Tab>
        </NavLink>
        <NavLink to="/notyourfeed">
          <Tab>Not your feed</Tab>
        </NavLink>
      </div>
      <Sidebar />
      {/* Пример рендера username, bio, email */}
    </div>
  );
}

export default ProfilePage;
