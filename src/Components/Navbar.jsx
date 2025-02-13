// src/components/Navbar.js
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Left: Site Name */}
      <div className="text-xl font-bold">
  <Link to="/">
    <span className="text-white">Port</span>
    <span className="text-blue-400">folio</span>
  </Link>
</div>

      {/* Right: Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
