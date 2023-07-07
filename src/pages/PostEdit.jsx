import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Quill from '../components/Quill'
import { toast } from "react-toastify";

const PostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios(`/single_post/${id}`);

      setTitle(res.data.title);
      setSummary(res.data.summary);
      setContent(res.data.content);
    };
    getPost();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    const newData = new FormData()
    newData.set("title", title);
    newData.set("summary", summary);
    newData.set("content", content);
    if (cover) {
      newData.set("cover", cover);
    }

    const res = await axios.put(`/post/edit/${id}`, newData);
    console.log(res)
    if (res.status === 224) {
      toast.success("Post Updated")
      navigate(`/post/${id}`)
    } else {
      toast.error(res.data)
    }
  };

  return (
    <>
      <form
        className="border w-3/4 min-w-[320px] p-5 rounded"
        onSubmit={handleUpdate}
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
      file:bg-violet-50 file:text-violet-500
      hover:file:bg-violet-100"
          type="file"
          onChange={(e) => setCover(e.target.files[0])}
        />

        <Quill value={content} onChange={setContent} />

        <button className="bg-green-500 rounded-full my-5 py-2 px-7">
          Update post
        </button>
      </form>
    </>
  );
};

export default PostEdit;
