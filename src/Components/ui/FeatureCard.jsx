const FeatureCard = ({ icon, title, description }) => {
  return (
    <figure className="text-gray-300">
      {typeof icon === 'string' ? (
        <img src={icon} alt={title} className="w-11 h-11 mb-3" />
      ) : (
        <div className="mb-3">{icon}</div>
      )}
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <figcaption className="text-sm leading-relaxed">
        {description}
      </figcaption>
    </figure>
  );
};

export default FeatureCard;
