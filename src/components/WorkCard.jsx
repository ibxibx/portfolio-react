import { Link } from 'react-router-dom';

const WorkCard = ({ title, description, link }) => {
  return (
    <div className="border rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <Link to={link} className="text-blue-500 underline">
        Read More
      </Link>
    </div>
  );
};

export default WorkCard;