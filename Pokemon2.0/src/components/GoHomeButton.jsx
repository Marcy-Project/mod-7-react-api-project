import { useNavigate } from 'react-router-dom';

const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="ui button fluid" onClick={() => navigate('/')}>
      Go Home
    </button>
  );
};

export default GoHomeButton;