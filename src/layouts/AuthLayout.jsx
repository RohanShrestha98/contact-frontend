import { Outlet } from "react-router-dom";
import authBackground from "../assets/authBackground.svg";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:inline-block bg-white ">
      <div className="p-10 h-screen overflow-auto no-scrollbar md:hidden">
        <img src={authBackground} alt="" />
        <h1 className="font-bold text-3xl mt-2">HIMS</h1>
        <p className="text-[#6D6D6D] text-sm">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.Class aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      <div className="md:w-[96vw]  h-screen overflow-auto md:overflow-hidden no-scrollbar  ">
        <Outlet />
      </div>
    </div>
  );
}
