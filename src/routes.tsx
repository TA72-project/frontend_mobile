import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/LoadingScreen';
import HomeLayout from './layouts/HomeLayout';
import Notification from './pages/Notifications';
const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );


//  *HOME PAGE
const Home = Loadable(lazy(() => import('./pages/Home')));
const Login = Loadable(lazy(() => import('./pages/auth/Login')));
const CguPage = Loadable(lazy(() => import('./pages/Cgu')));
const Profile = Loadable(lazy(() => import('./pages/profile/ViewProfile')));
const EditProfile = Loadable(lazy(() => import('./pages/profile/EditProfile')));

const routes: RouteObject[] = [
  {
    path: '*',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
        element: <Login />,
  },
  {
    path: '/cgu',
        element: <CguPage />,
  },
  {
    path: '/notifications',
    element: <MainLayout title='Notifications' />,
    children: [
      {
        index: true,
        element: <Notification />,
      },
    ],
  },
  {
    path: '/profile',
    element: <MainLayout title='Profile' />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: 'edit',
        element: <EditProfile />,
      },
    ],
  },
];

	export default routes;