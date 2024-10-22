import "./App.css";
import ConfigurationPage from "./MainList/ConfigurationPage";
import ConfigurationSetup from "./ComponentSettings/ConfigurationSetup";
import AddRecords from "./AddRecords/AddRecords";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfigurationPage />} />
        <Route path="/setup" element={<ConfigurationSetup id="1" />} />
        <Route path="/addRecords" element={<AddRecords />} />
      </Routes>
    </Router>
    // <>
    //   <ConfigurationPage />
    // </>
  );
}

export default App;
