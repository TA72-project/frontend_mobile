import { useEffect } from "react";
import type { FC } from "react";
import NProgress from "nprogress";
import { Box } from "@mui/material";

const LoadingScreen: FC = () => {
	useEffect(() => {
		NProgress.start();

		return (): void => {
			NProgress.done();
		};
	}, []);

	return (
		<Box
		>
      <Box>

      </Box>

    </Box>
	);
};

export default LoadingScreen;
