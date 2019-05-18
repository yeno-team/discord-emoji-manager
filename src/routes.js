import HomeView from 'views/Home';
import NotFound from 'components/core/NotFound';

export default [
  { path: '/', component: HomeView },
  { path: '*', component: NotFound },
];
