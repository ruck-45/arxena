// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Local
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/Home" />} />
    </Routes>
  );
}

export default App;
