import { Input, Spin, Upload, message } from "antd";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

import type { UploadFile } from "antd/es/upload/interface";
// import { createProducts } from '../../../../../actions/productAction';
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
// import { toast } from "react-toastify";
import Cloudinary from "../../../../../api/cloudinary";
import { toast } from "react-toastify";
import { createBlogs } from "../../../../../actions/blogAction";
import { EditorContainer } from "../../../../../EditorContainer";

export interface Icreate {
  title: string;
  content: string;
  image?: string;
}

interface IcreateForm {
  init: Icreate;
  onSuccess: () => void;
}

const CreateForm: React.FC<IcreateForm> = ({ onSuccess }) => {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const dispatch: Dispatch<any> = useDispatch();

  const onSubmit = async (values: any) => {
    console.log(values);
    setUploading(false);
    if (image.length < 1) return message.error("Select an image");
    if (title === "" || description === "")
      return message.error("Title and description are required");

    dispatch(
      createBlogs(
        { ...values, image: image, title, description },
        (cb, res) => {
          if (res === "success") {
            toast.success(cb, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            return onSuccess();
          }

          return toast.error(cb, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      )
    );
  };

  // const onEditorStateChange: any = (editorState: any) => {
  //   setEditor(editorState);
  // };

  const remove = (file: any) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  const beforeUpload = async (_file: any, x: any) => {
    setFileList([...x]);
    setUploading((prev) => !prev);
    for (let i = 0; i < x.length; i++) {
      // console.log(i);
      const formData = new FormData();
      formData.append(
        "upload_preset",
        `${import.meta.env.VITE_CLOUDINARY_PRESET}`
      );
      formData.append("file", x[i]);

      try {
        const res = await Cloudinary.post("/image/upload", formData);
        const { secure_url } = res.data;

        setImage(() => secure_url);
        message.success("Image successfully uploaded");
      } catch (err: any) {
        message.error(err);
      }
      setUploading((prev) => !prev);
    }
    return false;
  };
  return (
    <>
      <Upload
        onRemove={remove}
        beforeUpload={beforeUpload}
        fileList={fileList}
        listType="picture-card"
      >
        <div className="flex items-center justify-center flex-col">
          <FiPlus />
          <div style={{ marginTop: 8 }}>{uploading ? <Spin /> : null}</div>
        </div>
      </Upload>
      <div className="mb-5">
        <label>Enter Title</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label>Enter Description</label>
        <Input.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <EditorContainer onSubmit={onSubmit} />
    </>
  );
};

export default CreateForm;
