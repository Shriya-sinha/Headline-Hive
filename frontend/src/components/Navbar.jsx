import { CiSearch } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

  return (
    <>
      <nav className="flex justify-between items-center mx-32">
        <div className="flex flex-col items-start my-4">
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
          <a className="text-red-400 hover:text-red-600" href="/">
            Trending
          </a>
          <a className="" href="/">
            Education
          </a>
          <a className="" href="/">
            AI
          </a>
          <a className="" href="/">
            Sports
          </a>
          <a className="" href="/">
            Politics
          </a>
        </div>
        <div className="flex flex-row items-center">
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
