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
import { logIn, overview, pickOverviewPath } from '../../utils/pathutils';
import { buttonColorStyle } from "../../theme"
import { postRegisterData, logFailure, logSuccess }  from "./operations"



const RegistrationPage = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  let [token, setToken] = useToken();

  async function handleRegisterResponse(response) {
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

  async function handleRegisterButtonClick() {
    let responseJson = await postRegisterData(firstName, lastName, email, password);
    handleRegisterResponse(responseJson);
  }

  function handleLogInButtonClick() {
    navigate(logIn);
  }


  function handleEmailTextFieldChange(event) {
    setEmail(event.target.value);
  }


  function handleNameTextFieldChange(event) {
    setFirstName(event.target.value);
  }


  function handleSurnameTextFieldChange(event) {
    setLastName(event.target.value);
  }

  function handlePasswordTextFieldChange(event) {
    setPassword(event.target.value);
  }

  function handleRepeatedPasswordTextFieldChange(event) {
    setRepeatedPassword(event.target.value);
  }



  return (
    <Container>
      <SimpleAppBar text="Cookbook" />
      <Toolbar/>
      <Box>
        <Grid
        container
        spacing={1}>
          <CentredTextFieldGrid label={"Email"} value={email} onChange={handleEmailTextFieldChange}/>
          <CentredTextFieldGrid label={"Name"} value={firstName} onChange={handleNameTextFieldChange}/>
          <CentredTextFieldGrid label={"Surname"} value={lastName} onChange={handleSurnameTextFieldChange}/>
          <CentredPasswordFieldGrid value={password} onChange={handlePasswordTextFieldChange}/>
          <CentredPasswordFieldGrid
            value={repeatedPassword}
            onChange={handleRepeatedPasswordTextFieldChange}
            label='Repeated password'
          />
          <CentredButtonGrid buttonStyle={buttonColorStyle} onClick={handleRegisterButtonClick} buttonText="Sign up"/>
          <CenteredFormLabelGrid label="Already a member?"/>
          <CentredButtonGrid buttonStyle={buttonColorStyle} onClick={handleLogInButtonClick} buttonText="Log in"/>
        </Grid>
      </Box>
    </Container>
  );
}
export default RegistrationPage;
