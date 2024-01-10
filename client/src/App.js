import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CarList from "./components/CarList";
import NavBar from "./components/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" exact element={<CarList />}/>
          {/* <Route path = '/create' element = {}></Route>
          <Route path = '/update' element = {}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
