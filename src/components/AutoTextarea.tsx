import React, { useEffect, useRef } from "react";

const AutoTextarea: React.FC<{ value: string }> = ({ value }) => {
  const textareaRef: any = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = () => {
    adjustTextareaHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      readOnly
      className="w-full border-none outline-none text-left"
      //   style={{ overflow: "hidden" }}
    />
  );
};

export default AutoTextarea;
