import React from "react";
import BlogSearch from "./BlogSearch";
import BlogRecent from "./BlogRecent";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <BlogSearch />
      <BlogRecent />
    </>
  );
};

export default BlogSidebar;
