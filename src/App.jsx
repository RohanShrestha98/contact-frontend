import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/login";
import Home from "./pages/Home";
import RequireAuth from "./auth/requireAuth";
import PersistLogin from "./auth/persistLogin";
import Register from "./auth/register";
import CreateContact from "./pages/CreateContact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-contact" element={<CreateContact />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
