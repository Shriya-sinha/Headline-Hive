import {useLocation} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

  const location = useLocation();
  const currentCategory = location.pathname.replace("/", "");

  const categories = [
    { name: "Education", href: "/education" },
    { name: "AI", href: "/ai" },
    { name: "Sports", href: "/sports" },
    { name: "Politics", href: "/politics" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-lg">
        <div className="flex flex-col items-start my-4 ml-40">
          <h1>
            <span className="text-blue-600 text-2xl font-bold">Headline</span>
            <span className="text-black text-2xl font-bold">Hives</span>
          </h1>
          <div className="text-sm font-monst text-slate-400">
            <p>
              {day}, {month} {dayOfMonth}
              {ordinalSuffix} {year}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-items-center space-x-14 font-monst font-bold">
          <span className="flex flex-row items-center">
            <span className="relative flex mx-2 ">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative rounded-full bg-red-600 p-2"></span>
            </span>
            <span className="mx-2">
              <a className="text-red-400 hover:text-red-600 " href="/">
                Trending
              </a>
            </span>
          </span>
          {categories.map((category, index) => (
            <a
              key={index}
              className={
                currentCategory === category.name.toLowerCase() ? "active" : ""
              }
              href={category.href}
            >
              {category.name}
            </a>
          ))}
        </div>
        <div className="flex flex-row items-center mr-20">
          <label className="relative block mx-5">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <CiSearch size={17} />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-blue-300 font-monst focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
            />
          </label>
          <button className="flex items-center">
            <MdOutlineDarkMode size={25} />
          </button>
        </div>
      </nav>
    </>
  );
};

const getOrdinalSuffix = (dayOfMonth) => {
  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    return "st";
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    return "nd";
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    return "rd";
  } else {
    return "th";
  }
};
export default Navbar;
