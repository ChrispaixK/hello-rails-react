import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";

const App = () => {
  return <>
    <h1>Hello Rails-React!</h1>
    <Link to="/greeting">Generate greeting</Link>
    <Routes>
      <Route path="/greeting" element={<Greeting/>}/>
    </Routes>
  </>
}

export default App;