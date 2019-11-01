import RatingsTable from '../routes/Ratings';
import Dashboard from '../routes/Dashboard';
import Time from '../routes/Time';
import Deviations from '../routes/Deviations';

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
