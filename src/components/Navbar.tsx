import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">CryptoTracker</Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'underline' : ''}>Portafolio</NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={({ isActive }) => isActive ? 'underline' : ''}>Transacciones</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
