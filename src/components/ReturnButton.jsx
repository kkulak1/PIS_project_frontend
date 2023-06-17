
import { Button } from '@mui/material';

const ReturnButton = ({ onClick }) => {
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
        Return
    </Button>
  );
};

export default ReturnButton;