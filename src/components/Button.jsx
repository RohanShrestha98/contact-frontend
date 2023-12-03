/* eslint-disable react/prop-types */

export default function Button({ buttonName, className }) {
  return (
    <button
      className={`border w-full h-10 rounded bg-[#265CC0] text-white ${className}`}
    >
      {buttonName}
    </button>
  );
}
