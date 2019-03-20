import RatingsTable from '../components/RatingsTable';
import Dashboard from '../components/Dashboard';
import Time from '../components/Time';
import Deviations from '../components/Deviations';

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
  {
    name: 'Time',
    icon: 'calendar_today',
    path: '/time',
    component: Time,
  },
  {
    name: 'Deviations',
    icon: 'call_split',
    path: '/deviations',
    component: Deviations,
  },
];

export default routes;
