import { Container } from '@mui/system';
import { Toolbar, Typography, Button, AppBar, Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
import {logIn} from '../utils/pathutils'

export default function CustomizableAppBar({ children, buttonsData }) {
  let navigate = useNavigate();
  let [, setToken] = useToken();
  let buttons = [];

  function changePage(url) {
    navigate(url);
  }

  function handleLogOut() {
    setToken(null);
    navigate(logIn);
  }

  for (let i=0; i < buttonsData.length; i++) {
    buttons.push(
      <Button
      key={i}
      color='inherit'
      onClick={function(){changePage(buttonsData[i].url)}}>
      {buttonsData[i].name}
      </Button>
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