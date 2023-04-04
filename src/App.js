import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AssList from "./components/AssList";
import Header from "./components/Header";
import AssignmentPage from "./components/AssignmentPage";
import Submit from "./components/Submit";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AssList />} />
        <Route path="/:filter" element={<AssList />} />
        <Route path="/show/:id" element={<AssignmentPage />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}
export default App;
