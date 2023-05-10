import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Employees from "./views/Employees/Employees.jsx";
import Analytics from "./views/Analytics/Analytics.jsx";
// import Nav from "./components/Nav/Nav";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <Nav />} */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
