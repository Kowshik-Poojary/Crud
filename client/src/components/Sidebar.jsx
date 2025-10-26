import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 bg-gray-100 h-full z-30 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Close button inside sidebar */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">Menu</h2>
        <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900">
          ✕
        </button>
      </div>

      <ul className="mt-4 space-y-2 p-4">
        <li>
          <Link to="/form" onClick={toggleSidebar} className="hover:text-blue-600 block">
            Add Form
          </Link>
        </li>
        <li>
          <Link to="/list" onClick={toggleSidebar} className="hover:text-blue-600 block">
            View Entries
          </Link>
        </li>
      </ul>
    </aside>
  );
}
