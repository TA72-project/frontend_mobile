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
const Notes = Loadable(lazy(() => import('./pages/Notes')));
const DirectMessages = Loadable(lazy(() => import('./pages/DirectMessages')));
const Plan = Loadable(lazy(() => import('./pages/Plan')));


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
    path: '/notes',
    element: <MainLayout title='Notes' />,
    children: [
      {
        index: true,
        element: <Notes/>,
      },
    ],
  },
  {
    path: '/calendar',
    element: <MainLayout title='Calendar' />,
    children: [
      {
        index: true,
        element: <Notification />,
      },
    ],
  },
  {
    path: '/dm',
    element: <MainLayout title='Direct Messages' />,
    children: [
      {
        index: true,
        element: <DirectMessages />,
      },
    ],
  },
  {
    path: '/plan',
    element: <MainLayout title='Plan' />,
    children: [
      {
        index: true,
        element: <Plan />,
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