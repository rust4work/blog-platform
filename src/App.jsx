// import { useState } from "react";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import NewPost from "./pages/NewPost";
import Settings from "./pages/Settings";
import Loader from "./components/helpers/Loader";
import SinglePost from "./pages/SinglePost";
import BannerUserInfo from "./components/BannerUserInfo";

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
import BannerDefault from "./components/BannerDefault";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />}></Route>
      <Route path="/article/:slug" element={<SinglePost />} />

      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/newpost" element={<NewPost />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
