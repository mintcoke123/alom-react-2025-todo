import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donghyun from "./assignments/donghyun";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/donghyun" element={<Donghyun />} />
        <Route
          path="/"
          element={<div>App.js와 example.js를 확인해주세요.</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
