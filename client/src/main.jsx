import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Signup from './components/SignUp';
import Login from './components/Login';
import QuizForm from './pages/QuizForm';
import Error from './pages/Error'
import ScorePage from './pages/ScorePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/quizform',
        element: <QuizForm />
      }, {
        path: '/scorepage/:score',
        element: <ScorePage />
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
