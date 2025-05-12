import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TodoList from "./assignments/donghyun";

function NavigateToDongHyun() {
  const navigate = useNavigate();

  return (
      <button onClick={() => navigate("/donghyun")}>동현 페이지로 이동</button>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavigateToDongHyun />} />
        <Route path="/donghyun" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;