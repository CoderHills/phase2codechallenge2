import App from './App';
import Home from './pages/Home';
import AddGoal from './pages/AddGoal';
import EditGoal from './pages/EditGoal';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'add', element: <AddGoal /> },
      { path: 'edit/:id', element: <EditGoal /> }
    ]
  }
];

export default routes;
