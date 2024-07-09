import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './components/SignUp';
import Login from './components/Login';
import QuizForm from './pages/QuizForm';
import Error from './pages/Error'
import CategorySubmitResults from './pages/CategorySubmitResults.jsx';
import QuizPage from './pages/QuizPage.jsx';
// import ScorePage from './pages/ScorePage.jsx'

import auth from './utils/auth.js';
import LoginPage from './pages/LoginPage.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: auth.loggedIn() ? <Home /> : <LoginPage />, 
      },
      {
        path: '/login',
        element: <LoginPage />
      }, 
      {
        path: '/quizform',
        element: <QuizForm />
      }, 
      {
        path: '/search/:category',
        element: <CategorySubmitResults />
      },
      {
        path: '/:id',
        element: <QuizPage />
      }
      // {
      //   path: '/scorepage/:score',
      //   element: <ScorePage />
      // }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
