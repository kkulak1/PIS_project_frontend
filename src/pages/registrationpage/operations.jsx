
import * as restutils from "../../utils/restutils"
import { backendAddress, logIn, registration, registrationBackend } from "../../utils/pathutils"

export async function postRegisterData(firstName, lastName, email, password) {
  const responseJson = await restutils.post(
      backendAddress + registrationBackend,
      JSON.stringify({
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "password" : password
      })
  )
  return responseJson;
}


export function logSuccess() {
  console.log('Logged in');
}

export function logFailure() {
  console.log('Failed to log in');
}

