import React, { useState } from "react";
import axios from "axios";
import { useInRouterContext, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const res = await axios.post("/login", data);

    if (res.status === 224) {
      toast.success("User logged In");
      setUserInfo(res.data);
      navigate("/");
    } else {
      toast.warn(res.data);
    }
  };
  return (
    <>
      <form
        className="border min-w-[320px] p-5 rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold">Log in</h2>

        <input
          className="block my-5 text-slate-900 bg-white w-full h-9 px-3 rounded border-0 outline-0 placeholder:italic placeholder:text-slate-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="block my-5 text-slate-900 bg-white w-full h-9 px-3 rounded border-0 outline-0 placeholder:italic placeholder:text-slate-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 rounded-full py-2 px-7">Signup</button>
      </form>
    </>
  );
};

export default Login;
