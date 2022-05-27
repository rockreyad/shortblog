import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";

const BlogItem = ({
  blog: {
    id,
    title,
    description,
    category,
    authorName,
    authorAvatar,
    createdAt,
    cover,
    subCategory,
  },
}) => {
  return (
    <div className="p-2">
      <img src={cover} alt="cover" className="rounded-lg" />
      <Chip label={category} />
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-gray-500 font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illo
        possimus rem sint laboriosam natus.
      </p>
      <div className="flex mt-2 justify-between">
        <div className="flex">
          <img src={authorAvatar} alt="" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col text-xs mx-2">
            <h2 className="font-semibold">{authorName}</h2>
            <h2 className="font-light text-gray-400">{createdAt}</h2>
          </div>
        </div>
        <Link to={`/blog/${id}`} className="">
          ➝
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
