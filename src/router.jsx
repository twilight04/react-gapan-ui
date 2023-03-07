import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Navigate } from 'react-router-dom';
import Home from './view/Home';
import Services from './view/Services';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to='/' />
    },
])

export default router;