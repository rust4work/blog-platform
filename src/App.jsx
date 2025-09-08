// import { useState } from "react";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import NewPost from "./pages/NewPost";
import Settings from "./pages/Settings";
import Loader from "./components/helpers/Loader";
import SinglePost from "./pages/SinglePost";
import BannerUserInfo from "./components/BannerUserInfo";
import SignUpPage from "./pages/SignUpPage";

//layouts
import RootLayout from "./layouts/RootLayout";

import "./App.scss";
// import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const isAuthenticated = Boolean(localStorage.getItem("token"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="article/:slug" element={<SinglePost />} />

      <Route
        path="profile"
        element={
          isAuthenticated ? <ProfilePage /> : <Navigate to="/signup" replace />
        }
      />

      <Route path="newpost" element={<NewPost />} />
      <Route path="settings" element={<Settings />} />
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
