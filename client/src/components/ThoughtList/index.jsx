import { Link } from 'react-router-dom';
import { QUERY_THOUGHTS } from '../../utils/queries';
import Auth from '../../utils/auth';

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <h4 className="card-header bg-primary text-dark p-2 m-0">
              {thought.thoughtAuthor}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
