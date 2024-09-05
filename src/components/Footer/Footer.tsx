import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2ecc71', padding: '40px 20px', color: '#fff' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '40px', /* Added gap between columns */
        }}
      >
        {/* Footer Column 1 */}
        <Box 
          sx={{ 
            flex: '1 1 200px', 
            display: 'flex', 
            flexDirection: 'column', 
            marginBottom: '20px',
            marginRight: '40px', /* Added marginRight */
          }}
        >
          {/* Ignoring the logo */}
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Firstbench
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet. Rem aperiam labore ut totam unde et ipsum autem sed dolorem illo. Vel deserunt voluptates et consequatur illum et consequatur magni eos quia odio.
          </Typography>
        </Box>

        {/* Footer Column 2 */}
        <Box sx={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Quick links
          </Typography>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>About us</Link>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Debate rooms</Link>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Evaluation metrics</Link>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Profile</Link>
        </Box>

        {/* Footer Column 3 */}
        <Box sx={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Resources
          </Typography>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Support</Link>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Privacy policy</Link>
          <Link href="#" color="inherit" sx={{ margin: '8px 0' }}>Terms & Conditions</Link>
        </Box>

        {/* Footer Column 4 */}
        <Box sx={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Social media
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="#" color="inherit">
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
