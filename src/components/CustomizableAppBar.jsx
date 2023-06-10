import { Container } from '@mui/system';
import { Toolbar, Typography, Button, AppBar, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import {logIn} from '../utils/pathutils'
import AppBarButton from './buttons/AppBarButton';
import AppBarLogoutButton from './buttons/AppBarLogoutButton';


export default function CustomizableAppBar({ children, buttonsData }) {
  let navigate = useNavigate();
  // let [, setToken] = useToken();

  function handleLogOut() {
    // setToken(null);
    navigate(logIn);
  }

  let buttons = [];
  for (let appButtonData of buttonsData) {
    buttons.push(
      <AppBarButton appBarButtonData={appButtonData}/>
    );
  }
  
  return (
    <Container>
      <AppBar
      sx={{
        color: 'black',
        backgroundColor: 'silver',
        mb: 1,
      }}>
      <Toolbar>
        <Typography
        variant='h6'
        component='div'
        sx={{ mr: 5 }}>
          Cookbook
        </Typography>
        {buttons}
        <Box sx={{ flexGrow: 1 }}/>
        <AppBarLogoutButton/>
      </Toolbar>
      </AppBar>
      <Toolbar/>
      {children}
    </Container>
  );
}