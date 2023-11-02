import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "`react-router-dom`";
import { ImArrowRight2 } from "react-icons/im";
import { useAuthMutation } from "../hooks/UseMutateData";
import { useAuthContext } from "../context/authContext";
import Cookies from "universal-cookie";
import { encryptData } from "../utils/crypto";

const Login = () => {
  const { setAuth } = useAuthContext();
  const authMutation = useAuthMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const cookies = new Cookies({ path: "/" });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmitHandler = async (data) => {
    try {
      const result = await authMutation.mutateAsync(["post", "", data]);
      if (result?.success) {
        console.log("Login success");
        const userDetailsData = {
          accessToken: result?.data?.access,
          user: {
            id: result?.data?.user?.id,
            email: result?.data?.user?.email,
            username: result?.data?.user?.username || "",
          },
        };
        setAuth(userDetailsData);
        cookies.set("refreshToken", encryptData(result?.data?.refresh));
        cookies.set("userDetails", encryptData(userDetailsData));

        reset();
        navigate(from, { replace: true });
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
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col w-full space-y-4 sm:space-y-4 "
    >
      <div className="rounded-md">
        <input
          {...register("email")}
          name="email"
          type="email"
          placeholder="Your email"
        />
        <p className="text-red text-sm">{errors?.identity?.message}</p>
      </div>
      <div className="rounded-md">
        <input
          {...register("password")}
          name="password"
          type="password"
          placeholder="Password"
        />
        <p className="text-red text-sm">{errors?.password?.message}</p>
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className={`flex justify-center items-center gap-2 rounded-full bg-gray-500 sm:p-4 p-2 `}
      >
        Sign In <ImArrowRight2 />
      </button>
    </form>
  );
};

export default Login;
