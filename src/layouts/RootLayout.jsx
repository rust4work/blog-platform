import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import NavBarFrame from "../components/helpers/NavBarFrame";
import Loader from "../components/helpers/Loader";

function RootLayout() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoadingUser(false);
      return;
    }

    fetch("https://realworld.habsida.net/api/user", {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке пользователя:", err);
      })
      .finally(() => setLoadingUser(false));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loadingUser) return <Loader />;

  return (
    <div className="root-layout">
      <header>
        <NavBarFrame user={user} />
      </header>
      <main>
        <Outlet
          context={{
            user,
            setUser: (u) => {
              if (u === null) handleLogout();
              setUser(u);
            },
            loadingUser,
          }}
        />
      </main>
    </div>
  );
}

export default RootLayout;
