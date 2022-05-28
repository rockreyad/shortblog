import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Chip from "../../components/common/Chip/index.jsx";
import EmptyList from "../../components/common/EmptyList/index.jsx";
import { blogList } from "../../configs/data/data.js";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <div className="p-2">
      <Link
        to={"/"}
        className="flex justify-start items-center space-x-2 hover:bg-gray-400 bg-gray-600 w-fit px-2 rounded-md text-white"
      >
        <span className=" text-xl font-semibold">&#8592;</span>
        <p>Go back</p>
      </Link>

      {blog ? (
        <div className="">
          <header>
            <p className="mt-5"></p>

            <img
              src={blog.cover}
              alt="cover"
              className="rounded-lg shadow-lg shadow-gray-600 my-2"
            />
            <div className="flex space-x-2">
              {blog.subCategory.map((category, index) => (
                <div className="flex">
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>

            <h1 className="text-2xl font-semibold">{blog.title}</h1>
            <div className="flex justify-between bg-gray-100 py-2 px-0.5 rounded-sm">
              <h3>
                Author:{" "}
                <span className="font-semibold text-gray-600">
                  {blog.authorName}
                </span>
              </h3>
              <h3>
                Published{" "}
                <span className="font-semibold text-gray-600">
                  {blog.createdAt}
                </span>
              </h3>
            </div>
            <div className="leading-8 text-lg bg-indigo-50 shadow-sm py-2">
              {blog.description}
            </div>
          </header>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default Blog;
