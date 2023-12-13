import type { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

interface HomeLayoutProps {
	children?: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="w-full flex-grow">{children ?? <Outlet />}</div>
			<Navigation />
		</div>
	);
};

HomeLayout.propTypes = {
	children: PropTypes.node,
};

export default HomeLayout;
