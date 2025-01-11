// src/components/LandingPage.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Box style={{ height: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#F5E9E8' }}>
      <Box style={{ flex: 1, textAlign: 'center' }}>
        <Typography
          variant="h1"
          style={{ fontWeight: 'bold', fontSize: '6rem', color: '#5A2750', lineHeight: '1.2' }}
        >
          I<br />V<br />A<br />P<br />A<br />R<br />K
        </Typography>
      </Box>
      <Box style={{ flex: 2, padding: '20px' }}>
        <Typography variant="body1" style={{ fontSize: '1.2rem', color: '#5A2750' }}>
          Hello there,<br />
          I am a UI/UX designer passionate about turning complex ideas into intuitive, engaging experiences. 
          I combine design and technology to create solutions that meaningfully connect with users.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;

