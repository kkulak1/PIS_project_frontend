
import * as restutils from "../../utils/restutils"
import { backendAddress, logIn, logInBackend } from "../../utils/pathutils"

export async function postLoginData(email, password) {
  let data = JSON.stringify({
    'email': email,
    'password': password
  })
  console.log(data);
  const responseJson = await restutils.post(
    backendAddress + logInBackend,
    data
  )
  return responseJson;
}


export function logSuccess(responseJson) {
  console.log('Logged in');
}

export function logFailure() {
  console.log('Failed to log in');
}

