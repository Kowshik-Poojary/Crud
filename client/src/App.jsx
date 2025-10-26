import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FormPage from "./pages/FormPage.jsx";
import ListPage from "./pages/ListPage.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar with toggle button */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={() => setSidebarOpen(false)}
          />

          {/* Main content */}
          <main
            className={`flex-1 p-4 transition-all duration-300 ${
              sidebarOpen ? "ml-64" : "ml-0"
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/list" element={<ListPage />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer className="bg-gray-800 text-white p-4 text-center z-50" />
      </div>
    </Router>
  );
}
