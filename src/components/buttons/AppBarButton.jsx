
import { Button } from '@mui/material';
import React from 'react';

export default function AppBarButton({onClick, label, key}) {
  return (
    <Button
      key={key}
      color='inherit'
      onClick={onClick}
    >
      {label}
    </Button>
  )
}
