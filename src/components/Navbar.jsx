import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

    useEffect(() => {
      const getProfile = async (e) => {
        const res = await axios("/profile")
        console.log(res)
        if (res.status === 224) {
          toast.success("User profile found")
          setUserInfo(res.data)
        } else {
          toast.warn(res.data)
          setUserInfo(null)
        }
      }
      getProfile()
    }, [])

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await axios.post("/logout");

    if (res.status === 224) {
      toast.success("User Logged Out successfully");
      setUserInfo(null);
    } else {
      toast.errro(res.data);
    }
  };

  console.log(userInfo);

  return (
    <>
      <nav className="max-w-[1000px] px-7 h-full bg-rose-400 mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Blob
        </Link>
        {userInfo ? (
          <>
            <div className="flex gap-5">
              <Link to="/create">Write</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-5">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
