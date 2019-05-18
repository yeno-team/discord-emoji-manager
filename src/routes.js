import HomeView from 'views/Home';
import NotFound from 'components/core/NotFound';

export default [
  { path: '/home', component: HomeView },
  { path: '*', component: NotFound },
];
