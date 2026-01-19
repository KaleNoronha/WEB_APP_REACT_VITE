const SocialLink = ({ icon, href = "#" }) => {
  return (
    <a 
      href={href}
      className="flex items-center justify-center w-5 h-5 border border-gray-700 rounded-full hover:border-red-500 transition-colors"
    >
      <span className={icon} />
    </a>
  );
};

export default SocialLink;
