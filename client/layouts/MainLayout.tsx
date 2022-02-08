import React from 'react';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';

type Props = {};

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ margin: '90px 0' }}>{children}</Container>
    </>
  );
};

export default MainLayout;
