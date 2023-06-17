

import { Button } from '@mui/material';

const MoreButton = ({ onClick }) => {
  return (
    <Button
    variant="contained"
    color="primary"
    sx={{
      color: 'blue',
      '&:hover': {
        color: 'white',
        backgroundColor: 'blue',
      },
      margin: '10px',
    }}
    onClick={onClick}>
        More
    </Button>
  );
};

export default ReturnButton;