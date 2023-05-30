import { AppBar } from '@mui/material'



export default function SimpleAppBar() {
    return (
      <AppBar 
      sx={{
      color: 'black',
      backgroundColor: 'silver',
      mb: 1}}>
          <Toolbar style={{ justifyContent: 'center' }}>
              <Typography variant='h1'>
                  ProMan
              </Typography>
          </Toolbar>
      </AppBar>
    )
  }
  