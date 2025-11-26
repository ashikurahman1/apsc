import React from 'react';

const Introduction = () => {
  return (
    <section className="lg:w-10/12 mx-auto px-4 py-15 flex justify-between flex-col lg:flex-row gap-8 lg:gap-15">
      <div className="border border-primary/30 rounded-md shadow-md p-3">
        <div className="flex gap-3 p-3 ">
          {/* Name & Designation */}
          <div className="border-primary border w-20 lg:w-40 h-20 lg:h-45 overflow-hidden rounded-md shadow-md">
            <img
              src="https://img.favpng.com/3/11/24/3d-woman-avatar-stylized-cartoon-woman-avatar-with-glasses-g0FutwYY_t.jpg"
              alt="Principle Image"
              className="w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Principle name</h2>
            <p className="">Principle</p>
          </div>
        </div>
        <div className="border-t border-neutral-300 lg:p-5">
          <p className="mt-2">
            It is regarded as one of the best institutions due to its
            discipline, teaching technique and favorable teaching environment.
            In the meantime we achieved name and fame due to cent percent
            successful result in all public exams and has acquired position in
            top of Sylhet education board.
          </p>
          <br />
          <p>
            The students of the institution take part actively and successfully
            in the programs organized by Government and local authorities.
          </p>
          <br />
          <p>
            In all respects, considering over all activities the institution is
            one of the best in Sylhet division as well as all over Bangladesh.
          </p>
        </div>
      </div>
      <div className="border border-primary/30 rounded-md shadow-md p-3">
        <div className="flex gap-3 p-3 ">
          {/* Name & Designation */}
          <div className="border-primary border w-20 lg:w-40 h-20 lg:h-45 overflow-hidden rounded-md shadow-md">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
              alt="Principle Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Chairman name</h2>
            <p className="">Chairman</p>
          </div>
        </div>
        <div className="border-t border-neutral-300 lg:p-5">
          <p className="mt-2">
            It is regarded as one of the best institutions due to its
            discipline, teaching technique and favorable teaching environment.
            In the meantime we achieved name and fame due to cent percent
            successful result in all public exams and has acquired position in
            top of Sylhet education board.
          </p>
          <br />
          <p>
            The students of the institution take part actively and successfully
            in the programs organized by Government and local authorities.
          </p>
          <br />
          <p>
            In all respects, considering over all activities the institution is
            one of the best in Sylhet division as well as all over Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
