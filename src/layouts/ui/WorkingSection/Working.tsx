import React from "react";
import WorkingCard, { IWorkingcard } from "./WorkingCard";
import ReactPlayer from "react-player";

const workings: IWorkingcard[] = [
  {
    id: "z1",
    count: "01",
    headings: "Signup with all info",
    color: "#dd246e",
    text: "Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.",
  },
  {
    id: "z2",
    count: "02",
    headings: "Signup with all info",
    color: "#00c0a6",
    text: "Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.",
  },
  {
    id: "z3",
    count: "03",
    headings: "Signup with all info",
    color: "#1162fc",
    text: "Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.",
  },
  {
    id: "z4",
    count: "04",
    headings: "Signup with all info",
    color: "#dd246e",
    text: "Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.",
  },
];

const Working: React.FC = () => {
  return (
    <section className="py-32 bg-[#fafafa]">
      <h2 className="text-center mb-20 text-4xl" id="underline">
        Get Started
      </h2>
      <div className="md:mx-20 mx-5 grid grid-cols-2">
        <div className="md:col-span-1 col-span-2">
          <div>
            <h5 className="uppercase mb-3 text-blue-400 md:text-left text-center">
              How to start
            </h5>
            <h5 className="capitalize md:text-3xl text-2xl mb-10 md:text-left text-center">
              4 steps start your journey with us
            </h5>
            <div className="grid grid-cols-2 row-span-2 gap-4">
              {workings.map((work) => (
                <WorkingCard
                  key={work.id}
                  count={work.count}
                  headings={work.headings}
                  id={work.id}
                  color={work.color}
                  text={work.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:flex items-center hidden justify-center bg-black place-items-center">
          <div className="mx-auto w-2/4">
            <ReactPlayer
              width={300}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
