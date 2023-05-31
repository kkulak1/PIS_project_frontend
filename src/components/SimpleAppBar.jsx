import { AppBar, Toolbar, Typography } from '@mui/material'


export default function SimpleAppBar({text}) {
    return (
      <AppBar 
      sx={{
      color: 'black',
      backgroundColor: 'silver',
      mb: 1}}>
          <Toolbar style={{ justifyContent: 'center' }}>
              <Typography variant='h1'>
                  {text}
              </Typography>
          </Toolbar>
      </AppBar>
    )
  }
  