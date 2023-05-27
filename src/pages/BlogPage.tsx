import React from "react";
import HeaderComponent from "../layouts/HeaderComponent";
import BlogSection from "../layouts/ui/BlogSection/BlogSection";

const BlogPage: React.FC = () => {
  return (
    <>
      <HeaderComponent text="Blog Page" />
      <BlogSection />
    </>
  );
};

export default BlogPage;
