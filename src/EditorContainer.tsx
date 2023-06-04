import { Button } from "antd";
import { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import React from "react";

interface IEditor {
  onSubmit: (data: any) => void;
}

export const EditorContainer: React.FC<IEditor> = ({ onSubmit }) => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (html: any) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme={"snow"}
        onChange={(val) => handleChange(val)}
        value={editorHtml}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [12, 13, 14, 15, 16, 17] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
          },
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
        bounds={".app"}
        placeholder={"Enter text"}
      />
      <Button
        className="mt-5 w-full mb-5"
        onClick={() => onSubmit({ content: editorHtml })}
      >
        Submit
      </Button>
    </div>
  );
};
