import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AutoTextarea: React.FC<{ value: string }> = ({ value }) => {
  const textareaRef: any = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.height = "auto";
    textarea.height = `${textarea.scrollHeight}px`;
  };

  return (
    <ReactQuill
      readOnly
      ref={textareaRef}
      theme={"snow"}
      value={value}
      className="w-full border-none outline-none text-left"
      modules={{
        toolbar: false,
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }}
      //   style={{ overflow: "hidden" }}
    />
  );
};

export default AutoTextarea;
