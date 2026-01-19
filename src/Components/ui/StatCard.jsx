const StatCard = ({ value, label }) => {
  return (
    <figure className="text-white">
      <h1 className="text-5xl font-bold">{value}</h1>
      <figcaption className="text-right text-base mt-2">
        {label}
      </figcaption>
    </figure>
  );
};

export default StatCard;
