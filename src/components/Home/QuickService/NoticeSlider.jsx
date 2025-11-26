import { FaQuoteLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NoticeSlider = () => {
  return (
    <div
      className="  space-y-3
    "
    >
      <h2 className="flex my-2 text-2xl gap-2 font-bold bg-primary p-3 rounded text-base-100">
        {' '}
        <FaQuoteLeft /> Notice Board
      </h2>
      <div className="p-3 shadow-md">
        <Link className="border-l-4 border-primary pl-1 text-xl font-semibold">
          Notice Title
        </Link>
        <p className="text-sm">Published Date: DD/MM/YY</p>
      </div>
      <div className="p-3 shadow-md">
        <Link className="border-l-4 border-primary pl-1 text-xl font-semibold">
          Notice Title
        </Link>
        <p className="text-sm">Published Date: DD/MM/YY</p>
      </div>
      <div className="p-3 shadow-md">
        <Link className="border-l-4 border-primary pl-1 text-xl font-semibold">
          Notice Title
        </Link>
        <p className="text-sm">Published Date: DD/MM/YY</p>
      </div>
      <div className="p-3 shadow-md">
        <Link className="border-l-4 border-primary pl-1 text-xl font-semibold">
          Notice Title
        </Link>
        <p className="text-sm">Published Date: DD/MM/YY</p>
      </div>
    </div>
  );
};

export default NoticeSlider;
