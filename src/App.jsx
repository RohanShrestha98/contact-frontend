import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/login";
import Home from "./pages/Home";
import RequireAuth from "./auth/requireAuth";
import PersistLogin from "./auth/persistLogin";
import CreateContact from "./pages/CreateContact";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./auth/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
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
