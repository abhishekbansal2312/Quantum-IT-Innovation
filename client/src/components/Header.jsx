import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-primary bg-teal-100 text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MERN Auth
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="hidden md:inline">Welcome, {user.name}</span>
              <button
                onClick={onLogout}
                className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:bg-gray-100 bg-white text-primary px-4 py-2 rounded  transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white text-primary px-4 py-2 rounded hover:bg-gray-100 transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
