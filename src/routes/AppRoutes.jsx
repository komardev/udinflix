import {
    Home,
    Favourite
} from '../pages/index'

const AppRoutes = [{
        id: 1,
        path: '/',
        component: Home,
        exact: true
    },
    {
        id: 2,
        path: '/favourite',
        component: Favourite,
        exact: true
    }
]

export default AppRoutes