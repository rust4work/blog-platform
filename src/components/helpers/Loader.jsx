import React from "react";
import refresher from "../../assets/pics/refresh.svg";

function Loader() {
  return (
    <div className="loader">
      <div className="refresh">
        <img src={refresher} alt="" />
      </div>
      <div className="loading-text">loading</div>
    </div>
  );
}

export default Loader;
