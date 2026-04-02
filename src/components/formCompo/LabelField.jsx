const LabelField = ({ htmlFor, labelName, theme }) => {
  const baseClass = `
    ${
      theme === "dark" ? "text-white" : "text-black"
    } w-full lg:text-[1.1rem] md:text-[1rem] sm:text-[.80rem]`;
  return (
    <label className={baseClass} htmlFor={htmlFor}>
      {labelName}
    </label>
  );
};

export default LabelField;
