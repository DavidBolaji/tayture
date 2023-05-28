import React from "react";
import { images } from "../../../constants/image";
import BlogCard, { IBlogcard } from "./BlogCard";

export const cards: IBlogcard[] = [
  {
    id: "6",
    img: images.Bg,
    title: "Poor People’s Campaign Our Resources",
    date: "July 23, 2021",
  },
  {
    id: "7",
    img: images.Brand,
    title: "Boosting Social For NGO And Charities",
    date: "July 23, 2021",
  },
  {
    id: "8",
    img: images.Brand2,
    title: "Poor People’s Campaign Our Resources",
    date: "July 23, 2021",
  },
  {
    id: "16",
    img: images.Bg,
    title: "Poor People’s Campaign Our Resources",
    date: "July 23, 2021",
  },
  {
    id: "17",
    img: images.Brand,
    title: "Boosting Social For NGO And Charities",
    date: "July 23, 2021",
  },
  {
    id: "18",
    img: images.Brand2,
    title: "Poor People’s Campaign Our Resources",
    date: "July 23, 2021",
  },
];

const BlogRecent: React.FC = () => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl pl-1">Recent Posts</h2>
      <div className="mt-3">
        {cards.map((card) => (
          <BlogCard
            key={card.id}
            date={card.date}
            id={card.id}
            title={card.title}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogRecent;
