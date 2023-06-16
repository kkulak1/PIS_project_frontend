
import * as restutils from "../../utils/restutils"
import { backendAddress, logIn, registration } from "../../utils/pathutils"

export async function postRegisterData(login, password) {
  const responseJson = await restutils.postJson(
      backendAddress + registration,
      JSON.stringify({
        'login': login,
        'password': password
      })
  )
  return responseJson;
}


export function logSuccess(responseJson) {
  console.log('Logged in');
  console.log('Role: ' + responseJson.role);
}

export function logFailure() {
  console.log('Failed to log in');
}

