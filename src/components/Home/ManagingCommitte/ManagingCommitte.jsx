import React from 'react';

const allManagingComitte = [
  {
    image: 'https://storage.googleapis.com/example-images/129421/member/14.jpg',
    name: 'Kanik Chandra Sharkar',
    title: 'Chairman',
    phone: +8801717171717,
  },
  {
    image: '',
    name: 'Kanik Chandra Sharkar',
    title: 'Chairman',
    phone: +8801717171717,
  },
  {
    image: '',
    name: 'Kanik Chandra Sharkar',
    title: 'Chairman',
    phone: +8801717171717,
  },
  {
    image: '',
    name: 'Kanik Chandra Sharkar',
    title: 'Chairman',
    phone: +8801717171717,
  },
];
const allEvents = [
  {
    date: '18',
    month: 'Feb',
    title: 'Study Tour-2025',
    publishedDate: '18 Feb, 2025',
  },
  {
    date: '29',
    month: 'Nov',
    title: 'ডেঙ্গু প্রতিরোধে পরিচ্ছন্নতা সপ্তাহ-২০২৩',
    publishedDate: '29 Nov, 2023',
  },
  {
    date: '29',
    month: 'Sep',
    title: 'Shiekh Rassel Corner',
    publishedDate: '19 Sep, 2022',
  },
];
const ManagingCommitte = () => {
  return (
    <div className="bg-[url(/bg2.png)] py-10 lg:py-20">
      <section className="lg:w-10/12 px-5 mx-auto  ">
        <div className="section-title relative">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
            Managing <span className="text-primary">Committee</span>
          </h2>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-15  gap-3 lg:gap-7">
          {allManagingComitte.map((comitte, index) => (
            <div
              key={index}
              className=" border border-primary/20 bg-white rounded-md shadow-md p-3 hover:shadow-lg hover:-translate-1 transition "
            >
              <div className="w-full h-56 overflow-hidden bg-primary/50 rounded-md">
                <img
                  src={comitte.image}
                  alt={comitte.name}
                  className="w-full h-full object-cover  "
                />
              </div>
              <div className="text-center font-semibold ">
                <h3 className="uppercase line-clamp-1 mt-2">{comitte.name} </h3>
                <p className="text-sm text-neutral-500  ">{comitte.title} </p>
                <p className="text-sm  text-neutral-500 ">
                  <span className="font-semibold">Contact :</span>{' '}
                  {comitte.phone}{' '}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Evens & News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-15 gap-10">
          <div className="border border-primary rounded-md">
            <h2 className="uppercase p-5 text-2xl bg-primary text-white font-semibold ">
              Events
            </h2>
            {allEvents.map((event, index) => (
              <div className="border-b border-neutral-200 p-3 flex gap-2 ">
                <div key={index} className=" border border-primary rounded-md">
                  <p className="text-xl text-primary px-5 py-1 ">
                    {event.date}
                  </p>
                  <p className=" bg-primary px-5 py-1 text-white">
                    {event.month}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-xl">{event.title} </p>
                  <p className="text-primary">{event.publishedDate} </p>
                </div>
              </div>
            ))}
            <button className="uppercase font-semibold text-xl text-white bg-primary p-3 w-full mt-2">
              All Events
            </button>
          </div>
          <div className="border border-primary rounded-md">
            <h2 className="uppercase p-5 text-2xl bg-primary text-white font-semibold ">
              News
            </h2>
            {allEvents.map((event, index) => (
              <div className="border-b border-neutral-200 p-3 flex gap-2 ">
                <div key={index} className=" border border-primary rounded-md">
                  <p className="text-xl text-primary px-5 py-1 ">
                    {event.date}
                  </p>
                  <p className=" bg-primary px-5 py-1 text-white">
                    {event.month}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-xl">{event.title} </p>
                  <p className="text-primary">{event.publishedDate} </p>
                </div>
              </div>
            ))}
            <button className="uppercase font-semibold text-xl text-white bg-primary p-3 w-full mt-2">
              All News
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagingCommitte;
