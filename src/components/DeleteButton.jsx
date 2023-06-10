import { Button } from '@mui/material';

const DeleteButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        color: 'red',
        '&:hover': {
          color: 'white',
          backgroundColor: 'red',
        },
        margin: '10px',
      }}
      onClick={onClick}>
        Delete
    </Button>
  );
};

export default DeleteButton;