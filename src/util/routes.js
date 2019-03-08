import RatingsTable from '../components/RatingsTable';
import Dashboard from '../components/Dashboard';

const routes = [
  {
    name: 'Dashboard',
    icon: 'test',
    path: '/',
    component: Dashboard,
  },
  {
    name: 'Ratings',
    icon: 'table',
    path: '/ratings',
    component: RatingsTable,
  },
];

export default routes;
