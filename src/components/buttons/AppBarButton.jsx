
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AppBarButton({appBarButtonData}) {
  let navigate = useNavigate();
  return (
    <Button
      key={appBarButtonData.key}
      color='inherit'
      onClick={() => navigate(appBarButtonData.url)}
    >
      {appBarButtonData.label}
    </Button>
  )
}
