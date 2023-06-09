import { Alert, Space, Spin } from "antd";
import React, { useEffect } from "react";
import BlogSidebar from "../BlogSidebar";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../../actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import AutoTextarea from "../../../components/AutoTextarea";

const BlogSection: React.FC = () => {
  const { id } = useParams();
  const blogList = useSelector((state: any) => state.blogList);
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, blog } = blogList ?? {
    loading: false,
    blog: {},
    error: false,
  };

  useEffect(() => {
    dispatch(getSingleBlog(id!));
  }, [id]);
  return (
    <section className="grid grid-cols-7 md:mx-20 mx-5 py-10">
      {error && <Alert message={error} closable type="error" showIcon />}
      <div className="col md:col-span-5 col-span-7 md:pr-10">
        {loading ? (
          <div className="flex items-center">
            <Spin />
          </div>
        ) : (
          <div className="w-full">
            <h2 className="text-4xl mb-3">{blog.title}</h2>
            <div className="md:pr-10">
              <hr />
              <div className="flex justify-between items-center">
                <Space>
                  {/* <!-- ShareThis BEGIN --> */}
                  <div className="sharethis-inline-share-buttons"></div>
                  {/* <!-- ShareThis END --> */}
                </Space>
                <div className="sharethis-inline-reaction-buttons w-32 h-16"></div>
              </div>
              <hr />
              {/* <Divider /> */}
              <div className="">
                <AutoTextarea value={blog.content} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="col md:col-span-2 col-span-7 pt-2">
        <div className="p-5 shadow">
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
