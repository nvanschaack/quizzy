import { Link, redirect, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';
import Button from 'react-bootstrap/Button';
import QuizzyLogo from '../../assets/quizzy.jpeg';

const Header = () => {
  return (

    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={QuizzyLogo} alt="Quizzy Logo" style={{ width: '10%', marginRight: '5px'}} />
        <h1>Quizzy</h1>
      </div>
      <nav className='px-5' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} >
        <Link to='/' style={{ marginRight: '5px' }}>
          <Button variant="light">Home</Button>
        </Link>

        {Auth.loggedIn() ? (
          <>
            <Button variant="light" style={{ marginLeft: '5px' }} onClick={() => document.location.replace('/UserScores')}>Scores</Button>
            <Button variant="light" style={{ marginLeft: '5px' }} onClick={() => Auth.logout()}>Logout</Button>
          </>
        ) : ''}


      </nav>
    </header>
  );
};

export default Header;
