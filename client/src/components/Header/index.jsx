import { Link, redirect, useLocation } from 'react-router-dom';
import QuizForm from '../../pages/QuizForm';
import HomePage from '../../pages/Home';
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (

    <header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>Quizzy</h1>
      <nav className='px-5' >
        <Link to='/' style={{ marginRight: '5px' }}>
          <Button variant="light">Home</Button>
        </Link>

        {Auth.loggedIn() ? <Button variant="light" style={{ marginLeft: '5px' }} onClick={() => Auth.logout()}>Logout</Button> : ''}

      </nav>
    </header>
  );
};

export default Header;
