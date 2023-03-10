import "./App.css";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Workshop from "./components/Workshop";
import Technical from "./components/Technical";
import Nontechnical from "./components/Nontechnical";
import Home from "./components/Home";

function App() {
  return (
    <CssBaseline>
      <Navbar />
      <Routes>
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/nontechnical" element={<Nontechnical />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </CssBaseline>
  );
}

export default App;
