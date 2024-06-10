
import Dashboard from '../pages/Dashboard';
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

  

];


export { routes };
