import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system';
import { Box, Grid, Toolbar } from '@mui/material';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
import {
  CenteredFormLabelGrid,
  CentredButtonGrid
} from  '../../utils/placementutils';
import CentredTextFieldGrid from '../../components/textfields/CentredTextFieldGrid'
import CentredPasswordFieldGrid from '../../components/textfields/CentredPasswordFieldGrid'
import SimpleAppBar from '../../components/appbar/SimpleAppBar';
import { overview, pickOverviewPath, registration } from '../../utils/pathutils';
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

  async function handleLogInResponse(response) {
    console.log(response);
    if (response.ok) {
      let responseJson = await response.json();
      logSuccess(responseJson);
      handleSuccess(responseJson);
    } else {
      logFailure();
    }
  }

  function handleSuccess(responseJson) {
    setToken(responseJson.token);
    navigate(overview);
  }

  function handleLoginTextFieldChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordTextFieldChange(event) {
    setPassword(event.target.value);
  }

  function handleRegisterButtonClick() {
    navigate(registration);
  }

  return (
    <Container>
      <SimpleAppBar text="Cookbook" />
      <Toolbar/>
      <Box>
        <Grid
        container
        spacing={1}>
          <CentredTextFieldGrid label={"Email"} value={email} onChange={handleLoginTextFieldChange}/>
          <CentredPasswordFieldGrid value={password} onChange={handlePasswordTextFieldChange}/>
          <CentredButtonGrid buttonStyle={buttonColorStyle} onClick={handleLogInButtonClick} buttonText="Log in"/>
          <CenteredFormLabelGrid label="Not a member yet?"/>
          <CentredButtonGrid buttonStyle={buttonColorStyle} onClick={handleRegisterButtonClick} buttonText="Sign up"/>
        </Grid>
      </Box>
    </Container>
  );
}
export default LogInPage;
