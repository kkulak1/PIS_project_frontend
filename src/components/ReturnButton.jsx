
import { Button } from '@mui/material';

const ReturnButton = ({ onClick }) => {
  return (
    <Button
    variant="contained"
    color="inherit"
    sx={{
      margin: '10px',
    }}
    onClick={onClick}>
        Return
    </Button>
  );
};

export default ReturnButton;