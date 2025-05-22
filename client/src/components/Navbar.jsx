import React, { useState, useEffect } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(false);

  useEffect(() => {
    setAnimateNavbar(true);
  }, []);

  const redirectDashboard = (e) => {
    e.stopPropagation();
    if (auth?.user?.role === "admin") {
      navigate("/admin/details");
    } else {
      navigate("/user");
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/");
  };

  return (
    <nav
      className={`flex items-center justify-between p-4 shadow-md bg-white transition-all duration-700 ease-out transform ${
        animateNavbar ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div
        className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/")}
      >
        {/* <img src={logo} alt="logo" className="ml-[7rem] w-10 h-10" /> */}
        <span className="text-lg font-bold">Apna Hotel</span>
      </div>

      <div className="hidden md:flex space-x-6">
        {[
          { name: "Home", action: () => navigate("/") },
          { name: "Discover", action: () => navigate("/discover") },
          { name: "Activities", action: () => {} },
          { name: "About", action: () => {} },
          { name: "Contact", action: () => {} },
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:bg-gray-900 after:w-0 hover:after:w-full after:transition-all after:duration-500"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4 relative">
        <IoIosHeartEmpty
          size={20}
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => navigate("/cart")}
        />
        <FaUser
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          size={20}
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-12 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 transition-opacity duration-300 opacity-100"
            onMouseLeave={closeDropdown}
          >
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={redirectDashboard}
              >
                Your Profile
              </li>
              {auth?.user ? (
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogout}
                >
                  Sign Out
                </div>
              ) : (
                <div
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sign In
                </div>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={24} className="hover:rotate-90 transition-transform duration-300" />
          ) : (
            <FaBars size={24} className="hover:rotate-90 transition-transform duration-300" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden transition-all duration-500">
          {[
            { name: "Home", action: () => navigate("/") },
            { name: "Discover", action: () => navigate("/discover") },       // ✅ Fixed
            { name: "Activities", action: () => {} },
            { name: "About", action: () => {} },
            { name: "Contact", action: () => {} },
          ].map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
