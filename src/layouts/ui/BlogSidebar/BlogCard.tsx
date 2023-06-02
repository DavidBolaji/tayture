import React from "react";
import { useNavigate } from "react-router-dom";

export interface IBlogcard {
  _id: string;
  image: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<IBlogcard> = ({ _id, image, title, date }) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-3 mb-2 gap-3 p-2 shadow cursor-pointer"
      onClick={() => navigate(`/blog/${_id}`)}
    >
      <div className="col-span-1 w-full">
        <img className="w-full h-full object-cover" src={image} />
      </div>
      <div className="col-span-2 flex-col">
        <h3>{title}</h3>
        <p className="text-[12px]">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
