const Select = ({ options, placeholder, className = '', ...props }) => {
  return (
    <select
      className={`bg-transparent text-gray-300 border-b border-gray-300 py-2 px-1 mx-5 my-5 w-[82%] focus:border-red-500 focus:outline-none transition-colors ${className}`}
      {...props}
    >
      <option value="" className="bg-gray-300 text-gray-800">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option} className="bg-gray-300 text-gray-800">
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
