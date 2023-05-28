import React from "react";

export interface IBlogcard {
  id: string;
  img: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<IBlogcard> = ({ img, title, date }) => {
  return (
    <div className="grid grid-cols-3 mb-2 gap-3 p-2 shadow-sm">
      <div className="col-span-1 w-full">
        <img className="w-full h-full object-cover" src={img} />
      </div>
      <div className="col-span-2 flex-col">
        <h3>{title}</h3>
        <p className="text-[12px]">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
