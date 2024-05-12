import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li className="mr-6">
          <a href="#search" className="text-white hover:text-gray-300">Search Orders</a>
        </li>
        <li className="mr-6">
          <a href="#refunds" className="text-white hover:text-gray-300">Process Refunds</a>
        </li>
        <li className="mr-6">
          <a href="#update" className="text-white hover:text-gray-300">Update Customer Info</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;