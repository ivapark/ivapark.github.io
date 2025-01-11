// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flex: 1, color: '#000', fontWeight: 'bold' }}>
          Iva Park
        </Typography>
        <Box>
          <Typography variant="button" style={{ margin: '0 15px', color: '#000' }}>
            Home
          </Typography>
          <Typography variant="button" style={{ margin: '0 15px', color: '#000' }}>
            About Me
          </Typography>
          <Typography variant="button" style={{ margin: '0 15px', color: '#000' }}>
            Portfolio
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


