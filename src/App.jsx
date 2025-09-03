// import { useState } from "react";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

//layouts
import RootLayout from "./layouts/RootLayout";

import "./App.scss";
// import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Route>
  )
);

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://realworld.habsida.net/api/articles")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data.articles); // массив
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
