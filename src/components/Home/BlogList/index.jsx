import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-3 p-2 m-4">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
