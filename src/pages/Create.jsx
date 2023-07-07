import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Quill from '../components/Quill'


const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const reqFormData = new FormData();
    reqFormData.set("title", title);
    reqFormData.set("summary", summary);
    reqFormData.set("content", content);
    reqFormData.set("cover", cover);

    const res = await axios.post("/create_post", reqFormData);

    if (res.status === 224) {
      toast.success("New post created");
      navigate("/");
    } else {
      toast.error(res.data);
      toast.error(res.data.message);
    }
  };
  return (
    <>
      <form
        className="border w-3/4 min-w-[320px] p-5 rounded"
        onSubmit={handleCreatePost}
      >
        <input
          className="block w-full my-5 h-9 bg-white text-black placeholder:italic px-3 rounded border-0 outline-0"
          type="text"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="block w-full my-5 h-9 bg-white text-black placeholder:italic px-3 rounded border-0 outline-0"
          type="text"
          placeholder="Short Summary of your blog"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <input
          className="block w-full my-5 file:mr-5 file:px-4 file:py-1 file:rounded-full file:border-0 file:font-semibold
      file:bg-gray-700 file:text-green-500
      hover:file:bg-gray-800 placeholder:text-red-500"
          type="file"
          onChange={(e) => setCover(e.target.files[0])}
        />

        <Quill value={content} onChange={setContent} />

        <button className="bg-green-500 rounded-full my-5 py-2 px-7">
          Create post
        </button>
      </form>
    </>
  );
};

export default Create;
