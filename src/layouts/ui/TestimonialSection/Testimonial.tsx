// import { Carousel } from "antd";
import React from "react";
import TestimonialCard, { ITestimonials } from "./TestimonialCard";

const testimonials: ITestimonials[] = [
  {
    id: "a",
    name: "David Willson",
    role: "Web Developer",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia, modi obcaecati repellendus dolores earum impedit nemo aperiam ad maxime exercitationem hic, harum, suscipit praesentium quaerat?",
  },
  {
    id: "b",
    name: "Sunmi Willson",
    role: "Marketing Stratergist",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia, modi obcaecati repellendus dolores earum impedit nemo aperiam ad maxime exercitationem hic, harum, suscipit praesentium quaerat?",
  },
  {
    id: "c",
    name: "Kay Willson",
    role: "Marketing Stratergist",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia, modi obcaecati repellendus dolores earum impedit nemo aperiam ad maxime exercitationem hic, harum, suscipit praesentium quaerat?",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="py-32">
      <h2 className="text-center mb-20 text-4xl " id="underline">
        What people are saying
      </h2>
      <div className="grid grid-cols-3 md:mx-20 mx-5 pb-6 gap-5">
        {/* <Carousel autoplay autoplaySpeed={8000} arrows={true}> */}
        {testimonials.map((testimonial) => (
          <TestimonialCard
            id={testimonial.id}
            para={testimonial.para}
            name={testimonial.name}
            role={testimonial.role}
            key={testimonial.id}
          />
        ))}
        {/* </Carousel> */}
      </div>
    </section>
  );
};

export default Testimonial;
