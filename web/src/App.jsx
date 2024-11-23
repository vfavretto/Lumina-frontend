import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Header from "./views/components/common/header.jsx";
import Home from "./views/pages/home.jsx";
import About from "./views/pages/about.jsx";
import Partners from "./views/pages/partners.jsx";
import Blog from "./views/pages/blog.jsx";
import Login from "./views/pages/login.jsx";
import Footer from "./views/components/common/footer.jsx";
import Profile from "./views/pages/profile.jsx";
import Register from "./views/pages/register.jsx";
import Chat from "./views/components/common/chat.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="chat" element={<Chat/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route 
            path="/profile/:id" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;