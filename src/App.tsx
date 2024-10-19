import "./App.css";
import ConfigurationPage from "./ConfigurationPage";
import ConfigurationSetup from "./ConfigurationSetup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfigurationPage />} />
        <Route path="/setup" element={<ConfigurationSetup id="1" />} />
      </Routes>
    </Router>
    // <>
    //   <ConfigurationPage />
    // </>
  );
}

export default App;
