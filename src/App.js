import { Route, Routes } from "react-router";
import Create from "./pages/Create";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
