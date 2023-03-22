import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from '../Navbar/index';

function Layout() {
  return (
    <div>
      <Navbar />
      <Box p={12}>
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;
