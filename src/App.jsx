import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animedetails from "./Animedetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Animedetails/:mal_id" element={<Animedetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
