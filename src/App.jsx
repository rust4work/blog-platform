// import { useState } from "react";
import BannerDefault from "./components/BannerDefault";
import Typography from "./components/helpers/Typography";

import "./App.css";

function App() {
  return (
    <>
      <Typography text="Заголовок" variant="h1" color="red" />
      <Typography text="Обычный текст" variant="regular" />
      <Typography text="Жирный текст" variant="regularBold" />
    </>
  );
}

export default App;
