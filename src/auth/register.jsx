import { useForm } from "react-hook-form";
import { useNavigate } from "`react-router-dom`";
import { useAuthRegisterMutation } from "../hooks/UseMutateData";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const Register = () => {
  const authRegisterMutation = useAuthRegisterMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const onSubmitHandler = async (data) => {
    try {
      const result = await authRegisterMutation.mutateAsync(["post", "", data]);
      if (result?.success) {
        console.log("Register success");
        navigate("/login");
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
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2 w-96 border shadow-md px-4 py-4 pb-10 items-center rounded-md"
      >
        <h1 className="font-bold text-2xl">Register Form</h1>
        <InputField
          register={register}
          registerName="username"
          type="text"
          placeholder="Your username"
        />
        <InputField
          register={register}
          registerName="email"
          type="email"
          placeholder="Your email"
        />
        <InputField
          register={register}
          registerName="password"
          type="password"
          placeholder="Your password"
        />
        <Button buttonName={"Register"} />
        <Link to="/login">login</Link>
      </form>
    </div>
  );
};

export default Register;
