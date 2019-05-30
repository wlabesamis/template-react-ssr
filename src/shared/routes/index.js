import Home from '../components/Home';
import Posts from '../components/Posts';
import Todos from '../components/Todos';
import NoMatch from '../components/NoMatch';

import loadData from '../helpers/loadData';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/posts',
        component: Posts,
        loadData: () => loadData('posts')
    },
    {
        path: '/todos',
        component: Todos,
        loadData: () => loadData('todos')
    }
];

export default Routes;
