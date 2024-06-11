import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from "../redux/user/userSilce";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 10a6 6 0 1112 0 6 6 0 01-12 0zm3.293-2.707a1 1 0 011.414 0l1.414 1.414 1.414-1.414a1 1 0 111.414 1.414L10 13.414l-3.707-3.707a1 1 0 111.414-1.414l2.293 2.293z" clipRule="evenodd" />
          </svg>
          <h1 className="text-3xl font-bold">EcoCollect</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            {currentUser && currentUser.UserManager && (
              <li><Link to="/userManage" className="hover:underline">Manage Users</Link></li>
            )}
            {currentUser ? (
              <>
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                <li><Link to="/point" className="hover:underline">Point</Link></li>
                <li><Link to="/profile"><img src={currentUser.profilePicture} alt="profile" className="h-10 w-10 rounded-full object-cover" /></Link></li>
                <li onClick={handleSignout} className="cursor-pointer">Sign Out</li>
              </>
            ) : (
              <li><Link to="/sign-in" className="hover:underline">Sign In</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
