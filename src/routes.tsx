import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );


//  *HOME PAGE
const Home = Loadable(lazy(() => import('./views/Home')));

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