import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="flex w-full gap-7 py-4">
      <div className="w-1/2 h-[250px] bg-red-400 overflow-hidden">
        <Link to={`/post/${_id}`}>
          <img
            src={"https://test-blog-app-ddgx.onrender.com/" + cover}
            alt=""
            className="object-cover w-full h-full"
          />
        </Link>
      </div>
      <div className="w-1/2">
        <Link to={`/post/${_id}`}>
          <h1 className="text-2xl font-bold">{title}</h1>
        </Link>
        <p className="info my-2 text-xs flex gap-5">
          <img
            src={"https://test-blog-app-ddgx.onrender.com/" + author.avatar}
            alt=""
            className="w-[2rem] h-[2rem] object-cover"
          />
          <a href="" className="font-bold">
            {author.userName}
          </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Post;
