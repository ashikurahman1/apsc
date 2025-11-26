import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import NoticeSlider from './NoticeSlider';

const quickServices = [
  {
    title: 'Student List',
    icon: <FaUsers />,
  },
  {
    title: 'Our Teachers',
    icon: <FaUsers />,
  },
  {
    title: 'Verify Certificate',
    icon: <FaUsers />,
  },
  {
    title: 'Attendance Sheet',
    icon: <FaUsers />,
  },
  {
    title: 'Result',
    icon: <FaUsers />,
  },
  {
    title: 'Exam Schedule',
    icon: <FaUsers />,
  },
  {
    title: 'News',
    icon: <FaUsers />,
  },
  {
    title: 'Routine',
    icon: <FaUsers />,
  },
  {
    title: 'Gallery',
    icon: <FaUsers />,
  },
];
const QuickService = () => {
  return (
    <div className="bg-[url(/image.png)] bg-no-repeat bg-cover">
      <section className="lg:w-10/12 pb-15 px-4 mx-auto flex flex-col  gap-8 lg:gap-15 lg:flex-row items-center justify-between">
        <div className="lg:flex-1/2 grid grid-cols-2 lg:grid-cols-3 gap-5 ">
          {quickServices.map((service, index) => (
            <div
              key={index}
              className="bg-primary p-4 py-6 text-base-100 flex flex-col items-center rounded-md hover:-translate-y-1.5 transition-all shadow hover:shadow-xl shadow-primary"
            >
              <span className="text-3xl">{service.icon} </span>
              <p className="lg:text-xl font-semibold">{service.title} </p>
            </div>
          ))}
        </div>
        {/* Notices */}
        <div className="lg:flex-1/2 w-full  max-h-93 overflow-y-auto border rounded-md border-primary/30 p-5">
          <NoticeSlider />
        </div>
      </section>
    </div>
  );
};

export default QuickService;
