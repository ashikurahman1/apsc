import React from 'react';
import { Link } from 'react-router';
const ourTeachers = [
  {
    photo:
      'https://storage.googleapis.com/example-images/129421/teacher/1.jpeg',
    name: 'MD. HARUNUR RASHID TALUKDER',
    designation: 'Asst. Teacher',
  },

  {
    photo: '',
    name: 'MD. Mohibur Rahman',
    designation: 'Asst. Teacher',
  },

  {
    photo: '',
    name: 'MD. Mohibur Rahman',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Anisul Haque',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Tarek Aziz',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Rezaul Karim',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Jashim Uddin',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Masud Rana',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Saiful Islam',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Shahin Alam',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Abdul Kader',
    designation: 'Asst. Teacher',
  },
  {
    photo: '',
    name: 'MD. Abdul Kader',
    designation: 'Asst. Teacher',
  },
];
const OurTeacher = () => {
  return (
    <section className="lg:w-10/12 px-5 mx-auto py-10 lg:py-20 ">
      <div className="section-title relative">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
          Our <span className="text-primary">Teachers</span>
        </h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 my-15  gap-3 lg:gap-7">
        {ourTeachers.map((teacher, index) => (
          <div
            key={index}
            className=" border border-primary/20 rounded-md shadow-md p-3 hover:shadow-lg hover:-translate-1 transition"
          >
            <div className="w-full h-30 lg:h-46 overflow-hidden bg-primary/50 rounded-md">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full  object-cover  "
              />
            </div>
            <div className="text-center font-semibold">
              <h3 className="uppercase line-clamp-1 lg:text-[18px] mt-2">
                {teacher.name}{' '}
              </h3>
              <p className="text-sm lg:text-[16px] text-neutral-500">
                {teacher.designation}{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={'/'}
          className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-primary/80 px-8 py-3 text-neutral-50 uppercase font-semibold"
        >
          <span className="relative z-10">All Teachers</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-primary transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default OurTeacher;
