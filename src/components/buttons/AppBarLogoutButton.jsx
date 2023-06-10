import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../utils/pathutils';


export default function AppBarLogoutButton({}) {
  let navigate = useNavigate();
  return (
    <Button
      style={{ color: '#ff3300' }}
      onClick={() => navigate(logIn)}>
      Log out
    </Button>
  );
};