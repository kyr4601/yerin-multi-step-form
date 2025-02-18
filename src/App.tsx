import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main";
import Name from "./pages/Name";
import Gender from "./pages/Gender";
import Job from "./pages/Job";
import Hobby from "./pages/Hobby";
import Summary from "./pages/Summary";
import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/name" element={<Name/>}/>
        <Route path="/gender" element={<Gender/>}/>
        <Route path="/job" element={<Job/>}/>
        <Route path="/hobby" element={<Hobby/>}/>
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
