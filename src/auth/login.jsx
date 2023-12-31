import { useForm } from "react-hook-form";
import { useNavigate } from "`react-router-dom`";
import { useAuthMutation } from "../hooks/UseMutateData";
import { useAuthContext } from "../context/authContext";
import Cookies from "universal-cookie";
import { encryptData } from "../utils/crypto";
import Button from "../components/Button";
import InputField from "../components/InputField";
import logo from "../assets/logo.svg";

const Login = () => {
  const { setAuth } = useAuthContext();
  const authMutation = useAuthMutation();
  const navigate = useNavigate();
  const cookies = new Cookies({ path: "/" });

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const onSubmitHandler = async (data) => {
    try {
      const result = await authMutation.mutateAsync(["post", "", data]);
      if (result?.success) {
        console.log("Login success");
        const userDetailsData = {
          accessToken: result?.accessToken,
          user: {
            id: result?.data?.id,
            email: result?.data?.email,
            username: result?.data?.username || "",
          },
        };
        setAuth(userDetailsData);
        cookies.set("accessToken", encryptData(result?.accessToken));
        cookies.set("userDetails", encryptData(userDetailsData));
        reset();
        navigate("/");
      } else {
        console.log("error", result?.response?.data?.errors?.error.toString());
      }
    } catch (error) {
      let errorMessage = error?.response?.data?.errors?.error
        ? error?.response?.data?.errors?.error?.toString()
        : error?.message?.toString();
      console.log("error", errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen sm:w-full">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2 w-[460px] sm:w-full sm:shadow-none shadow-md sm:px-6 py-10 px-14 items-center rounded-3xl "
      >
        <img src={logo} alt="" />
        <h1 className=" font-bold text-2xl pt-4 text-center">
          Welcome to <span className="text-blue-500"> HIMS- WHO</span>{" "}
        </h1>
        <p className="text-gray-500 text-xs mb-4 text-center">
          Fill the credentials below to log into HIMS- WHO
        </p>
        <InputField
          register={register}
          registerName="email"
          type="email"
          placeholder="Email"
        />
        <InputField
          className={"mt-1"}
          register={register}
          registerName="password"
          type="password"
          placeholder="Password"
        />
        <div className="w-full">
          <div className="flex justify-between items-center mt-8">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p className="text-[#343434] text-xs font-medium">
                Keep me logged in
              </p>
            </div>
            <p className="text-red-500 text-xs font-semibold cursor-pointer">
              Forgot your password?
            </p>
          </div>
        </div>
        <Button
          buttonName={"Login"}
          className={"rounded-2xl mt-2 hover:opacity-70"}
        />
        <div className="flex items-center gap-2 mt-1">
          <p className="font-semibold text-gray-500 text-xs">
            Don’t have an account?{" "}
            <span
              onClick={() => {
                navigate("/sign-up");
              }}
              className="text-[#265CC0] underline cursor-pointer"
            >
              {" "}
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
