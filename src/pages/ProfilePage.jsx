import React, { useEffect, useState } from "react";
import BannerUserInfo from "../components/BannerUserInfo";
import Tab from "../components/helpers/Tab";
import Sidebar from "../components/helpers/Sidebar";
import { Navigate, NavLink, useOutletContext } from "react-router-dom";

function ProfilePage() {
  const { user, setUser } = useOutletContext();
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return; // редирект произойдет ниже
    }

    fetch("https://realworld.habsida.net/api/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok)
          throw new Error(data.errors?.body?.[0] || "Failed to fetch user");
        setUser(data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [setUser, user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  if (!user) return <Navigate to="/sign-in" replace />;

  //posts
  useEffect;

  return (
    <div>
      <BannerUserInfo /> {/* теперь BannerUserInfo сам берет user из context */}
      <div className="feeds">
        <NavLink to="/profile-page/yourfeed">
          <Tab>Your feed</Tab>
        </NavLink>
        <NavLink to="/profile-page/notyourfeed">
          <Tab>Not your feed</Tab>
        </NavLink>
      </div>
      <Sidebar />
      <div className="personal-posts"></div>
    </div>
  );
}

export default ProfilePage;
