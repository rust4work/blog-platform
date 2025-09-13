import { useOutletContext, Navigate } from "react-router-dom";
import Button from "./helpers/Button";
import Typography from "./helpers/Typography";

function BannerUserInfo() {
  const { user, setUser } = useOutletContext();

  if (!user) return <Navigate to="/sign-in" replace />;

  return (
    <div className="userinfo--container">
      {user.image ? (
        <img src={user.image} alt={user.username} className="profile-avatar" />
      ) : (
        <div className="default-avatar">👤</div>
      )}
      <Typography variant="h2" color="white">
        {user.username}
      </Typography>

      <Button variant="secondary-small" withIcon={false}>
        Edit profile
      </Button>

      <Button
        variant="warning-small"
        withIcon={false}
        onClick={() => setUser(null)}
      >
        Log out
      </Button>
    </div>
  );
}

export default BannerUserInfo;
