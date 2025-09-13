import "./App.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// страницы
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import NewPost from "./pages/NewPost";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import SignUpPage from "./pages/SignUpPage";
import SignIn from "./pages/SignIn";

// layout
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="article/:slug" element={<SinglePost />} />

      <Route path="profile-page" element={<ProfilePage />} />

      <Route path="newpost" element={<NewPost />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
