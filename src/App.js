import React from "react";
import NavBar from "./components/Navbar";
import CodeForInterview from "./components/CodeForInterview";
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

      <NavBar />
      {/* <Routes>
        <Route path="/" component={CodeForInterview} />
      </Routes> */}
      {/* <Routes>
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<CodeForInterview />} />
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUsers />} />

      </Routes>

      {/* <CodeForInterview /> */}
      {/* <AllUsers /> */}
      {/* <AddUsers /> */}
    </BrowserRouter >
  );
}

export default App;
