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
import { logIn, pickOverviewPath } from '../../utils/pathutils';
import { buttonColorStyle } from "../../theme"
import { postRegisterData, logFailure, logSuccess }  from "./operations"



const RegistrationPage = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [name, setName ] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  let [token, setToken] = useToken();

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

  async function handleRegisterButtonClick(login, password) {
    // let responseJson = await postRegisterData(login, password);
    // handleLogInResponse(responseJson);
  }

  function handleLogInButtonClick() {
    navigate(logIn);
  }


  function handleEmailTextFieldChange(event) {
    setEmail(event.target.value);
  }


  function handleNameTextFieldChange(event) {
    setName(event.target.value);
  }


  function handleSurnameTextFieldChange(event) {
    setSurname(event.target.value);
  }

  function handlePasswordTextFieldChange(event) {
    setPassword(event.target.value);
  }

  function handleRepeatedPasswordTextFieldChange(event) {
    setPassword(event.target.value);
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
          <CentredTextFieldGrid label={"Name"} value={name} onChange={handleNameTextFieldChange}/>
          <CentredTextFieldGrid label={"Surname"} value={surname} onChange={handleSurnameTextFieldChange}/>
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
