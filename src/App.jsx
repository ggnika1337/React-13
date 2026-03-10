import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import Mercury from "./Pages/Mercury";
import Venus from "./Pages/Venus";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mercury />} />
          <Route path="/Mercury" element={<Mercury />} />
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />}></Route>
          <Route path="/Mars" element={<Mars />}></Route>
          <Route path="/Jupiter" element={<Jupiter />}></Route>
          <Route path="/Saturn" element={<Saturn />}></Route>
          <Route path="/Uranus" element={<Uranus />}></Route>
          <Route path="/Neptune" element={<Neptune />}></Route>
          <Route
            path="*"
            element={
              <h1 className="text-red-700 text-[50px] flex self-center w-full justify-center">
                404 || NOT FOUND
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
