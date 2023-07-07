import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import Create from './pages/Create'
import axios from "axios";
import { UserProvider } from "./context/userContext";
import PostEdit from "./pages/PostEdit";
import SinglePost from "./pages/SinglePost";

axios.defaults.baseURL = "https://test-blog-app-ddgx.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create" element={<Create />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/post/edit/:id" element={<PostEdit />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
