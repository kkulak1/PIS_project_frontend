import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system';
import { Box, Grid, Toolbar } from '@mui/material';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
import { 
  CenteredFormLabelGrid,
  CentredButtonGrid
} from  '../../utils/placementutils';
import CentredTextFieldGrid from '../../components/CentredTextFieldGrid'
import CentredPasswordFieldGrid from '../../components/CentredPasswordFieldGrid'
import SimpleAppBar from '../../components/SimpleAppBar';
import { pickOverviewPath, registration } from '../../utils/pathutils';
import { buttonColorStyle } from "../../theme"
import { postLoginData, logFailure, logSuccess }  from "./operations"

const LogInPage = () => {
  let navigate = useNavigate()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  let [token, setToken] = useToken();

  async function handleLogInButtonClick() {
    let responseJson = await postLoginData(login, password);
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

  function handleLoginTextFieldChange(event) {
    setLogin(event.target.value);
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
          <CentredTextFieldGrid label={"Email"} value={login} onChange={handleLoginTextFieldChange}/>
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
