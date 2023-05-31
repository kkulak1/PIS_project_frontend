import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system';
import { Box, Grid, Toolbar } from '@mui/material';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
// import { 
//   SimpleAppBar, 
//   CentredTextFieldGrid,
//   CentredPasswordFieldGrid,
//   CenteredFormLabelGrid,
//   CentredButtonGrid
// } from  '../../utils/placementutils';
import SimpleAppBar from '../../components/SimpleAppBar';
import { pickOverviewPath } from '../../utils/pathutils';
import { buttonColorStyle } from "../../theme"
import { postLoginData, logFailure, logSuccess }  from "./operations"

const LogInPage = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [token, setToken] = useToken();

  async function handleLogInButtonClick() {
    let responseJson = await postLoginData(email, password);
    handleLogInResponse(responseJson);
  }

  function handleLogInResponse(responseJson) {
    if (responseJson.status === 'success') {
      logSuccess(responseJson);
      handleSuccess(responseJson);
    } else {
      logFailure();
    }
  }

  function handleSuccess(responseJson) {
    setToken(responseJson.token);
    let url = pickOverviewPath(responseJson.role);
    navigate(url);
  }

  function handleEmailTextFieldChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordTextFieldChange(event) {
    setPassword(event.target.value);
  }

  return (
    <Container>
      <SimpleAppBar text="Książeczki książki" />
      <Toolbar/>
      <Box>                           
        <Grid
        container
        spacing={2}>
          {/* {CentredTextFieldGrid("Username", email, handleEmailTextFieldChange)}
          {CentredPasswordFieldGrid(password, handlePasswordTextFieldChange)}
          {CentredButtonGrid(buttonColorStyle, handleLogInButtonClick, "Log in")}
          {CenteredFormLabelGrid("Not a member yet?")}
          {CenteredFormLabelGrid("Contact us at proman@gmail.com to sign up!")} */}
        </Grid> 
      </Box>
    </Container>
  );
}
export default LogInPage;
