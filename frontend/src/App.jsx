import './App.css'
import Navbar from './components/Navbar.jsx'
import NewsList from './components/NewsList.jsx'
import { BrowserRouter } from "react-router-dom";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <NewsList />
      </BrowserRouter>
    </>
  );
}

export default App
