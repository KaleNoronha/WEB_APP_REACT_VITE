const ServiceCard = ({ icon, title, description, offset = 0 }) => {
  return (
    <figure 
      className={`bg-black text-gray-300 p-10 mx-10 relative`}
      style={{ top: `${offset}px` }}
    >
      <img src={icon} alt={title} className="w-20 h-20 mb-5" />
      <figcaption className="text-justify">
        <h1 className="text-3xl mb-4">{title}</h1>
        {description}
      </figcaption>
      <span className="icon-[material-symbols-light--arrow-forward] text-red-500 text-2xl mt-3 inline-block" />
    </figure>
  );
};

export default ServiceCard;
