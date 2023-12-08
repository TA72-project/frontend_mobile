import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/LoadingScreen';
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
    element: <MainLayout title='' />,
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