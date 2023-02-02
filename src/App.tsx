import { Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import Users from "./views/users";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Navigate to="/users" replace />} />
    </Routes>
  );
}

export default App;
