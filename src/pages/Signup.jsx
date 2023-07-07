import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqData = new FormData();
    reqData.set("userName", userName);
    reqData.set("email", email);
    reqData.set("password", password);
    reqData.set("avatar", avatar);

    const res = await axios.post("/signup", reqData);
      console.log(res.data);

    if (res.status === 224) {
      toast.success("User Created");
      navigate("/login");
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
        <h2 className="text-2xl font-bold">Sign up</h2>

        <input
          className="block my-5 text-slate-900 bg-white w-full h-9 px-3 rounded border-0 outline-0 placeholder:italic placeholder:text-slate-500"
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

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

        <input
          className="block w-full my-5 file:mr-5 file:px-4 file:py-1 file:rounded-full file:border-0 file:font-semibold
      file:bg-gray-700 file:text-green-500
      hover:file:bg-gray-800 placeholder:text-red-500"
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
        />

        <button className="bg-green-500 rounded-full py-2 px-7">Signup</button>
      </form>
    </>
  );
};

export default Signup;
