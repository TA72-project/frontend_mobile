import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import experimentalStyled from "@mui/styled-engine";
import Navigation from "../components/Navigation";
import AppBar from "../components/AppBar";

interface MainLayoutProps {
	children?: ReactNode;
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<AppBar title={title} />
			<div className="w-full flex-grow">{children ?? <Outlet />}</div>
			<Navigation />
		</div>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node,
};

export default MainLayout;
