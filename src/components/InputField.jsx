/* eslint-disable react/prop-types */

export default function InputField({
  type,
  register,
  placeholder,
  registerName,
}) {
  return (
    <input
      className="w-full border h-10 px-2 rounded"
      {...register(registerName)}
      type={type}
      placeholder={placeholder}
    />
  );
}
