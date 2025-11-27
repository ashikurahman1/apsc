import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
const clasWiseStudents = [
  {
    class: 1,
    totalStudent: 60,
  },
  {
    class: 2,
    totalStudent: 80,
  },
  {
    class: 3,
    totalStudent: 69,
  },
  {
    class: 4,
    totalStudent: 39,
  },
  {
    class: 5,
    totalStudent: 24,
  },
  {
    class: 6,
    totalStudent: 35,
  },
];
const StudentsStatistics = () => {
  return (
    <div className="bg-primary">
      <section className="lg:w-10/12 px-5 mx-auto py-10 lg:py-20 ">
        <div className="section-title relative">
          <h2 className="text-2xl text-white lg:text-3xl font-semibold text-center mb-8">
            Student <span className="text-neutral-300">Statistics</span>
          </h2>
        </div>
        <p className="text-center text-white">Class wise Students</p>
        <div className="flex flex-wrap gap-10 justify-center mt-10 lg:20">
          {clasWiseStudents.map((statistic, i) => (
            <div
              className="text-base-100 flex flex-col justify-center items-center duration-300 transition-all hover:-translate-y-2.5 text-center bg-red-900 rounded-full min-h-30 w-30"
              key={i}
            >
              <h3 className="text-2xl lg:text-5xl font-semibold">
                {statistic.totalStudent}{' '}
              </h3>
              <p className="font-semibold mt-2">Class : {statistic.class} </p>
            </div>
          ))}
        </div>
      </section>
      <div
        className="bg-sky-700 flex justify-center gap-10 p-3 text-2xl text-white
      "
      >
        <div className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition hover:-translate-y-1.5 cursor-pointer  ">
          <FaFacebookF />
        </div>
        <div className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition hover:-translate-y-1.5 cursor-pointer  ">
          <FaInstagram />
        </div>
        <div className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition hover:-translate-y-1.5 cursor-pointer  ">
          <FaYoutube />
        </div>
        <div className="bg-primary p-3 rounded-full hover:bg-white hover:text-primary transition hover:-translate-y-1.5 cursor-pointer  ">
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default StudentsStatistics;
