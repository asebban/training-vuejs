import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
import Home from './components/Home'

export const routes = [
  { path: '/user', component: User},
  { path: '/userDetail', component: UserDetail},
  { path: '/userEdit', component: UserEdit},
  { path: '/userStart', component: UserStart},
  { path: '/', component: Home}
];
