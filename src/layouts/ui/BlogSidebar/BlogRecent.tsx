import React, { useEffect, useState } from "react";
// import { images } from "../../../constants/image";
import BlogCard, { IBlogcard } from "./BlogCard";
import Axios from "../../../api/auth";
import { Spin } from "antd";

// export const cards: IBlogcard[] = [
//   {
//     id: "6",
//     img: images.Bg,
//     title: "Poor People’s Campaign Our Resources",
//     date: "July 23, 2021",
//   },
//   {
//     id: "7",
//     img: images.Brand,
//     title: "Boosting Social For NGO And Charities",
//     date: "July 23, 2021",
//   },
//   {
//     id: "8",
//     img: images.Brand2,
//     title: "Poor People’s Campaign Our Resources",
//     date: "July 23, 2021",
//   },
//   {
//     id: "16",
//     img: images.Bg,
//     title: "Poor People’s Campaign Our Resources",
//     date: "July 23, 2021",
//   },
//   {
//     id: "17",
//     img: images.Brand,
//     title: "Boosting Social For NGO And Charities",
//     date: "July 23, 2021",
//   },
//   {
//     id: "18",
//     img: images.Brand2,
//     title: "Poor People’s Campaign Our Resources",
//     date: "July 23, 2021",
//   },
// ];

const fetchBlog = async () => {
  const blog = await Axios.get("/post/read5");
  return blog.data;
};

const BlogRecent: React.FC = () => {
  const [blog, setBlog] = useState<IBlogcard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchBlog().then((blog) => {
      setLoading(false);
      setBlog(blog.data);
    });
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-2xl pl-1">Recent Posts</h2>
      {loading && (
        <div className="flex items-center justify-center">
          <Spin />
        </div>
      )}
      <div className="mt-3">
        {blog.map((card) => (
          <BlogCard
            key={card._id}
            date={card.date}
            _id={card._id}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogRecent;
