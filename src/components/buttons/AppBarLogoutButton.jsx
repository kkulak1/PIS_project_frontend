import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../utils/pathutils';
import useToken from '../../hooks/useToken';


export default function AppBarLogoutButton({}) {
  let navigate = useNavigate();
  let [, setToken] = useToken();
  setToken(null);
  return (
    <Button
      style={{ color: '#ff3300' }}
      onClick={() => navigate(logIn)}>
      Log out
    </Button>
  );
};