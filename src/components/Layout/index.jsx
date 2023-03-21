import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/index';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Box p={12}>
        {children}
      </Box>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
