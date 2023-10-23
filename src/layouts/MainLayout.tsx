import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import experimentalStyled from '@mui/styled-engine';
import Navigation from '../components/Navigation';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayoutRoot = experimentalStyled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64,
}));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navigation />
      <div className="w-full flex-grow">{children ?? <Outlet />}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;