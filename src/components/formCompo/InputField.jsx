const InputField = ({ type, name, placeholder, theme }) => {
  const baseClass = `${
    theme === "dark"
      ? "text-[#ffffff] bg-[#232323] placeholder:text-[#bfbfbf]"
      : "text-[#232323] bg-[#ffffff] placeholder:text-[#232323]"
  } w-full lg:text-[1rem] md:text-[.80rem] sm:text-[.70rem] rounded py-[0.5rem] px-[0.8rem] my-[0.5rem] border border-gray-500`;

  return (
    <input
      min={0}
      className={baseClass}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputField;
