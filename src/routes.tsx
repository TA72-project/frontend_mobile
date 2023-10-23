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

const routes: RouteObject[] = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

	export default routes;