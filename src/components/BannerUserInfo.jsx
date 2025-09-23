import { useOutletContext, Navigate, useNavigate } from "react-router-dom";
import Button from "./helpers/Button";
import Typography from "./helpers/Typography";

function BannerUserInfo() {
  const { user } = useOutletContext();

  const navigate = useNavigate();

  if (!user) return <Navigate to="/sign-in" replace />;

  const clickHandler = () => {
    navigate("/profile-page");
  };

  return (
    <div className="userinfo--container">
      {user.image ? (
        <img
          src={user.image}
          alt={user.username}
          className="profile-avatar"
          onClick={clickHandler}
        />
      ) : (
        <div className="default-avatar" onClick={clickHandler}>
          👤
        </div>
      )}
      <Typography variant="h2" color="white" onClick={clickHandler}>
        {user.username}
      </Typography>

      <Button variant="secondary-small" withIcon={false} onClick={clickHandler}>
        follow
      </Button>
    </div>
  );
}

export default BannerUserInfo;
