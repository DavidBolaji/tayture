import {
  Alert,
  Button,
  Popconfirm,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
// import { deleteProduct, getProducts } from '../../../../actions/productAction';
import { FiDelete, FiEdit } from "react-icons/fi";
// import { useNavigate } from 'react-router-dom';
import { Icreate } from "./form/CreateForm";
import { getBlogs } from "../../../../actions/blogAction";
// import { toast } from "react-toastify";

interface IView {
  change: (el: Icreate) => void;
}

const ViewProduct: React.FC<IView> = ({ change }) => {
  const blogList = useSelector((state: any) => state.blogList);
  // const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, blogs } = blogList ?? {
    loading: false,
    blogs: [],
    error: false,
  };

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (_text: string, _record: any, index: number) => index + 1,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      className: "px-4 py-2",
      render: (_text: string, _record: any) => (
        <img width={70} src={_record.image} alt={_record.title} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "px-4 py-2",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      className: "px-4 py-2",
      render: (_text: string, _record: any) => (
        <Typography.Paragraph
          ellipsis={{
            rows: 5,
          }}
          className="font-[arial] mt-3"
        >
          {_record.description}
        </Typography.Paragraph>
      ),
    },
    {
      title: "Action",
      key: "action",
      // responsive: ["md"],
      render: (_: any, _record: any) => (
        <Space size="middle">
          <Tooltip title="edit">
            <Button
              size="small"
              onClick={() => change(_record)}
              className="bg-blue-600 text-white"
            >
              <FiEdit />
            </Button>
          </Tooltip>
          <Tooltip title="delete">
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this product?"
              className=""
              // onConfirm={() =>
              //   dispatch(
              //     deleteProduct(_record._id, (cb, res) => {
              //       if (res === 'success') {
              //         // return message.success(cb);
              //         return toast.success(cb, {
              //           position: 'top-right',
              //           autoClose: 5000,
              //           hideProgressBar: false,
              //           closeOnClick: true,
              //           pauseOnHover: true,
              //           draggable: true,
              //           progress: undefined,
              //           theme: 'light',
              //         });
              //       }

              //       return toast.error(cb, {
              //         position: 'top-right',
              //         autoClose: 5000,
              //         hideProgressBar: false,
              //         closeOnClick: true,
              //         pauseOnHover: true,
              //         draggable: true,
              //         progress: undefined,
              //         theme: 'light',
              //       });
              //     })
              //   )
              // }
              okButtonProps={{
                className: "bg-[#fdc729]",
              }}
              onCancel={() => console.log("cancel")}
              cancelText="No"
              okText="Yes"
            >
              {/* <Button type="link">Delete</Button> */}
              <Button
                size="small"
                className="bg-red-700 text-white"
                // onClick={() => navigate(`edit_user/${record._id}`)}
              >
                <FiDelete />
              </Button>
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  //   const pagination = {
  //     current: currentPage,
  //     pageSize: pageSize,
  //     total: total,
  //     showSizeChanger: true,
  //     pageSizeOptions: ["10", "20", "30", "40", "50", "200"],
  //   };

  return (
    <>
      {error && (
        <Alert
          message="Error"
          type="error"
          closable
          showIcon
          description={error}
        />
      )}
      <Table
        columns={columns}
        dataSource={blogs}
        loading={loading}
        rowKey={"_id"}
        size="small"
      />
    </>
  );
};

export default ViewProduct;
