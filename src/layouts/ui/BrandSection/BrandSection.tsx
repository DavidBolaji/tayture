import React from "react";
import { images } from "../../../constants/image";
import { Image } from "antd";

interface IBrand {
  id: string;
  img: string;
}

const supports: IBrand[] = [
  {
    id: "1",
    img: images.Brand,
  },
  {
    id: "2",
    img: images.Brand2,
  },
  {
    id: "3",
    img: images.Brand3,
  },
];

const BrandSection: React.FC = () => {
  return (
    <div className="bg-[#fafafa] grid grid-cols-3 md:mx-20 mx-5 item-center place-items-center h-32">
      {supports.map((support: IBrand) => {
        return (
          <div className="" key={support.id}>
            <Image preview={false} src={support.img} />
          </div>
        );
      })}
    </div>
  );
};

export default BrandSection;
