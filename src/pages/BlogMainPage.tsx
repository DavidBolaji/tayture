import React, { useEffect } from "react";
import { IBlogcard } from "../layouts/ui/BlogSidebar/BlogCard";
import HeaderComponent from "../layouts/HeaderComponent";
import BlogMainCard from "../layouts/ui/BlogMain/BlogMainCard";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getBlogs } from "../actions/blogAction";
import { Alert, Spin } from "antd";

export interface IBlogPage extends IBlogcard {
  content?: string;
  read?: string;
  length?: string;
}

const BlogMainPage: React.FC<IBlogPage> = () => {
  const blogList = useSelector((state: any) => state.blogList);
  // const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, blogs } = blogList ?? {
    loading: false,
    blogs: [],
    error: false,
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <>
      <HeaderComponent text="Blog Page" />
      <section className="md:mx-20 mx-5 grid grid-cols-3 my-20 gap-5">
        {loading && (
          <div className="w-full flex items-center justify-center">
            <Spin />
          </div>
        )}
        {error && <Alert message={error} closable type="error" showIcon />}
        {blogs.map((blog: IBlogPage) => (
          <BlogMainCard
            date={blog.date}
            title={blog.title}
            key={blog._id}
            image={blog.image}
            content={blog.content}
            _id={blog._id}
            read={blog.length}
          />
        ))}
      </section>
    </>
  );
};

export default BlogMainPage;
