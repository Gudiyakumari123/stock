
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Courses from '../pages/course/Courses';


const routes = [
    {
        path: '/',
        element: <Dashboard />,
        layout: 'default',
    },
    {
        path: '/course',
        element: <Courses />,
        layout: 'default',
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/register',
        element: <Register />,
        layout: 'blank',
    },

    {
        path: '/profile',
        element: <Profile />,
        layout: 'blank',
    },

  

];


export { routes };
