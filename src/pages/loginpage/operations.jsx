
import * as restutils from "../../utils/restutils"
import { backendAddress, logIn } from "../../utils/pathutils"

export async function postLoginData(login, password) {
const responseJson = await restutils.postJson(
    backendAddress + logIn,
    JSON.stringify({
    'login': login,
    'password': password
    })
)
return responseJson;
}
