import { useState } from "react";
import { Outlet } from "react-router";
import NavBarFrame from "../components/helpers/NavBarFrame";

function RootLayout() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // обновляем глобальный user
  };

  return (
    <div className="root-layout">
      <header>
        <NavBarFrame user={user} /> {/* user всегда актуальный */}
      </header>
      <main>
        <Outlet
          context={{
            user,
            setUser: (u) => {
              if (u === null) handleLogout();
              setUser(u);
            },
          }}
        />
      </main>
    </div>
  );
}

export default RootLayout;
