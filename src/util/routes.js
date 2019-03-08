import RatingsTable from '../components/RatingsTable';
import Dashboard from '../components/Dashboard';

const routes = [
  {
    name: 'Dashboard',
    icon: 'bubble_chart',
    path: '/',
    component: Dashboard,
  },
  {
    name: 'Ratings',
    icon: 'list',
    path: '/ratings',
    component: RatingsTable,
  },
];

export default routes;
