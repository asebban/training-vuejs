import User from './components/user/User'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import UserStart from './components/user/UserStart'
import Home from './components/Home'

export const routes = [
  { path: '/user', component: User, children: [
      { path: '', component: UserStart},
      { path: '/:id', component: UserDetail},
      { path: '/:id/edit', component: UserEdit}
    ]},
  { path: '/', component: Home }
];
