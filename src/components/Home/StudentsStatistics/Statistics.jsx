import React from 'react';

const statisticsAll = [
  {
    image: 'https://i.ibb.co.com/PvF8gLGd/student-male.png',
    title: 6,
    description: 'Classes',
  },
  {
    image: 'https://i.ibb.co.com/d40SfjmM/teacher.png',
    title: 434,
    description: 'Students',
  },
  {
    image: 'https://i.ibb.co.com/Y4fKf7vJ/classroom.png',
    title: 16,
    description: 'Teachers',
  },
  {
    image: 'https://i.ibb.co.com/4wNtK9SQ/conference-background-selected.png',
    title: 5,
    description: 'Staffs',
  },
];
const Statistics = () => {
  return (
    <div className="bg-primary">
      <section className="lg:w-10/12 px-5 mx-auto py-10 lg:py-20 ">
        <div className="section-title relative">
          <h2 className="text-2xl text-white lg:text-3xl font-semibold text-center mb-8">
            Statistics
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {statisticsAll.map((statistic, i) => (
            <div
              className="text-base-100 flex flex-col items-center duration-300 transition-all hover:-translate-y-2.5"
              key={i}
            >
              <img src={statistic.image} alt="" />
              <h3 className="text-2xl lg:text-5xl font-semibold">
                {statistic.title}{' '}
              </h3>
              <p className="font-semibold">{statistic.description} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Statistics;
