const Input = ({ type = 'text', placeholder, className = '', ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-transparent border-b border-gray-300 text-gray-300 py-2 px-1 mx-5 my-5 focus:border-red-500 focus:outline-none transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;
