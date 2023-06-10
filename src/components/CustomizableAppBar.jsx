import { Container } from '@mui/system';
import { Toolbar, Typography, Button, AppBar, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import {logIn} from '../utils/pathutils'
import AppBarButton from './buttons/AppBarButton';

export default function CustomizableAppBar({ children, buttonsData }) {
  let navigate = useNavigate();
  let [, setToken] = useToken();
  let buttons = [];

  function handleLogOut() {
    setToken(null);
    navigate(logIn);
  }

  for (let AppButtonData in buttonsData) {
    buttons.push(
      <AppBarButton AppButtonData={AppButtonData}/>
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
        <Button
        style={{ color: '#ff3300' }}
        onClick={handleLogOut}>
          Log out
        </Button>
      </Toolbar>
      </AppBar>
      <Toolbar/>
      {children}
    </Container>
  );
}