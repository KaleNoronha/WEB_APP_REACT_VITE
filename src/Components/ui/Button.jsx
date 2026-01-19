const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
    secondary: 'bg-white text-black border-white hover:bg-red-500 hover:text-white',
    outline: 'bg-transparent text-white border-white hover:bg-red-500 hover:border-red-500',
    dark: 'bg-black text-white border-black hover:bg-red-500'
  };

  return (
    <button
      className={`border rounded-2xl px-6 py-2 transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
