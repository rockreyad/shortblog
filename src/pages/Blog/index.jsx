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
    <div>
      <Link to={"/"}>
        <span>&#8592;</span>Go back
      </Link>

      {blog ? (
        <div className="">
          <header>
            <p className="">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div>
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
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
