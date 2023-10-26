import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import NotificationIcon from '@mui/icons-material/Notifications';
import { colors } from '@mui/material';

const Header = () => {
  return (
    <nav className="fixed w-full top-0 left-0 rl-auto">
      <div className=" dark:bg-gray-900  px-8  dark:border-gray-600 max-w-screen-xl flex flex-wrap border-b sm:w-11/12 lg:w-8/12 md:w-10/12 xl:w-6/12 z-20 mt-5 items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TA 72</span>
        </a>

        <div className="flex md:order-2">
          <Box sx={{ display: { md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ color: colors.grey[50] }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{ color: colors.grey[50] }}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </div>

      </div>
    </nav>
  );
};

export default Header;