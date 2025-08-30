// import { useState } from "react";
import BannerDefault from "./components/BannerDefault";
import Typography from "./components/helpers/Typography";
import BannerArticle from "./components/BannerArticle";
import UserInfo from "./components/helpers/UserInfo";
import Button from "./components/helpers/Button";

import "./App.css";

function App() {
  return (
    <>
      <Button variant="primarySmall">Text</Button>

      <Button variant="secondarySmall">Text</Button>
      <Button variant="warningSmall">Text</Button>
      <Button variant="primaryLarge">Text</Button>
      <Button variant="secondaryLarge">Text</Button>
      <Button variant="warningLarge">Text</Button>
    </>
  );
}

export default App;
