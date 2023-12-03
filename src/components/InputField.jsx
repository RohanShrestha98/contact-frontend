/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function InputField({
  type,
  register,
  placeholder,
  className,
  registerName,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {type === "email" || type === "password" ? (
        <div
          className={`flex items-center gap-2 w-full border border-gray-dark3 h-10 px-3 rounded-xl ${className}`}
        >
          {type === "email" ? (
            <div className="h-full flex items-center">
              {" "}
              <MdOutlineEmail className="text-gray-400" size={18} />{" "}
            </div>
          ) : (
            <div className="h-full flex items-center">
              {" "}
              <MdOutlineLock className="text-gray-400" size={18} />{" "}
            </div>
          )}
          <input
            className="outline-none h-9 w-full text-sm "
            {...register(registerName)}
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
          />
          {type === "password" && (
            <>
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                  size={18}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                  size={18}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <div
          className={`flex items-center gap-2 w-full border border-gray-dark3 h-10 px-3 rounded-xl ${className}`}
        >
          <input
            className="outline-none h-9 w-full text-sm"
            {...register(registerName)}
            type={type}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
}
