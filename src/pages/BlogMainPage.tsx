import React from "react";
import { IBlogcard } from "../layouts/ui/BlogSidebar/BlogCard";
import { images } from "../constants/image";
import HeaderComponent from "../layouts/HeaderComponent";
import BlogMainCard from "../layouts/ui/BlogMain/BlogMainCard";

export interface IBlogPage extends IBlogcard {
  text?: string;
}

const blogs: IBlogPage[] = [
  {
    id: "6",
    img: images.Bg,
    title: "Business Ueporting Rouncil Them Could Plan.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
  {
    id: "7",
    img: images.Brand,
    title: "Financial Reporting Qouncil What Could More.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
  {
    id: "8",
    img: images.Brand2,
    title: "Consulting Reporting Qounc Arei Could More.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
  {
    id: "16",
    img: images.Bg,
    title: "Consulting Reporting Qounc Arei Could More.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
  {
    id: "17",
    img: images.Brand,
    title: "Consulting Reporting Qounc Arei Could More.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
  {
    id: "18",
    img: images.Brand2,
    title: "Consulting Reporting Qounc Arei Could More.",
    date: "July 23, 2021",
    text: "Pluoresnts customize prancing apcente customer service anding ands asing in straelg Interacvely cordinate performe",
  },
];

const BlogMainPage: React.FC<IBlogPage> = () => {
  return (
    <>
      <HeaderComponent text="Blog Page" />
      <section className="md:mx-20 mx-5 grid grid-cols-3 my-20 gap-5">
        {blogs.map((blog) => (
          <BlogMainCard
            date={blog.date}
            title={blog.title}
            key={blog.id}
            img={blog.img}
            text={blog.text}
            id={blog.id}
          />
        ))}
      </section>
    </>
  );
};

export default BlogMainPage;
