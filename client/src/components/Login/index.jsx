import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';
import ThoughtList from '../ThoughtList';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await login({
        variables: {
          ...formState
        }
      })

      Auth.login(data.login.token);
    } catch (e) {
      console.error('Error during login mutation:', e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header  text-dark p-2" style={{backgroundColor: '#81d0ac'}}>Login</h4>
          <div className="card-body">
            {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : ( */}
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input mx-2"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input mx-2"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block mx-2"
                  style={{ cursor: 'pointer', backgroundColor: '#1f5f51', color: 'white' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            {/* )} */}
            

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;