import { Link } from 'react-router-dom';

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="text-white text-xl font-bold"
        >
          ☰
        </button>
      <h1 className="font-bold text-lg">MERN CRUD App</h1>
      <div className="flex items-center space-x-4">
        {/* Toggle button always visible */}
        
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/form" className="hover:text-gray-200">Add Form</Link>
          <Link to="/list" className="hover:text-gray-200">View Entries</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200">Register</Link>
        </div>
      </div>
    </nav>
  );
}
