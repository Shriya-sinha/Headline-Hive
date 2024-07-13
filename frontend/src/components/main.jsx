import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import NewsList from "./NewsList";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NewsList />
    </BrowserRouter>
  );
};

export default Main;
