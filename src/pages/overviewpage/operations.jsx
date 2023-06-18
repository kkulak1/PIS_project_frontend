
import * as restutils from "../../utils/restutils"
import { addCostBackend, addIngredientBackend, addQuantityBackend, addRecipeBackend, backendAddress, changeRecipeBackend, changeStepBackend, deleteCostBackend, deleteIngredientBackend, deleteQuantityBackend, deleteRecipeBackend, getRecipeBackend, getRecipeDetailsBackend, logIn, modifyCostBackend, modifyIngredientBackend, modifyQuantityBackend, postRecipeAddDurationBackend, putRecipeChangeDurationBackend } from "../../utils/pathutils"
import useToken from "../../hooks/useToken";

//recipe
export async function postAddRecipeData(name, description, token) {
  const response = await restutils.postWithBody(
    backendAddress + addRecipeBackend,
    token,
    JSON.stringify({
      'name': name,
      'description': description
    })
  )
  return response;
}

export async function postRecipeChangeNameData(recipeId, newName, token) {
  const response = await restutils.postWithBody(
    backendAddress + changeRecipeBackend,
    token,
    JSON.stringify({
      'recipeId': recipeId,
      'newName': newName
    })
  )
  return response;
}

export async function deleteRecipeData(id, token) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteRecipeBackend,
    token,
    JSON.stringify({
      'id': id
    })
  )
  return response;
}

export async function useRecipeData() {
  const [token, setToken] = useToken()
  const response = await restutils.get(
    backendAddress + getRecipeBackend,
    token
  )
  if (response.ok) {
    return await response.json()
  }
}

export async function getRecipeDetailsData(recipe, token) {
  const response = await restutils.getWithBody(
    backendAddress + getRecipeDetailsBackend,
    token,
    JSON.stringify({
      recipe    //nie wiem co tutaj dac jak w request ma byc po prostu obiekt recipe
    })
  )
  return response;
}


export async function getRecipeDetailsById(recipeId, token) {
  const response = await restutils.getWithBody(
    backendAddress + getRecipeDetailsBackend,
    token,
    JSON.stringify({
      id: recipeId    
    })
  )
  return response;
}



//duration
export async function postAddDurationData(amountOfTime, unit, recipe, token) {
  const response = await restutils.postWithBody(
    backendAddress + postRecipeAddDurationBackend,
    token,
    JSON.stringify({
      'amountOfTime': amountOfTime,
      'unit': unit,
      'recipe': recipe
    })
  )
  return response;
}

export async function putRecipeChangeDurationData(recipe, newTime, token) {
  const response = await restutils.putWithBody(
    backendAddress + putRecipeChangeDurationBackend,
    token,
    JSON.stringify({
      'recipe': recipe,
      'newTime': newTime
    })
  )
  return response;
}

//step
export async function putStepChangeData(recipe, steps, token) {
  const response = await restutils.putWithBody(
    backendAddress + changeStepBackend,
    token,
    JSON.stringify({
      'recipe': recipe,
      'steps': steps
    })
  )
  return response;
}

//quantity
export async function addQuantityData(value, unit, ingredient, token) {
  const response = await restutils.postWithBody(
    backendAddress + addQuantityBackend,
    token,
    JSON.stringify({
      'value': value,
      'unit': unit,
      'ingredient': ingredient
    })
  )
  return response;
}

export async function deleteQuantityData(quantity, token) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteQuantityBackend,
    token,
    JSON.stringify({
      quantity  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt quantity
    })
  )
  return response;
}

export async function modifyQuantityData(quantity, token) {
  const response = await restutils.putWithBody(
    backendAddress + modifyQuantityBackend,
    token,
    JSON.stringify({
      quantity  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt quantity
    })
  )
  return response;
}

//ingredient
export async function addIngredientData(recipe, type, name, description, token) {
  const response = await restutils.postWithBody(
    backendAddress + addIngredientBackend,
    token,
    JSON.stringify({
      'recipe': recipe,
      'type': type,
      'name': name,
      'description': description
    })
  )
  return response;
}

export async function deleteIngredientData(id, token) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteIngredientBackend,
    token,
    JSON.stringify({
      'id': id
    })
  )
  return response;
}

export async function modifyIngredientData(id, type, name, description, token) {
  const response = await restutils.putWithBody(
    backendAddress + modifyIngredientBackend,
    token,
    JSON.stringify({
      'id': id,
      'type': type,
      'name': name,
      'description': description
    })
  )
  return response;
}

//cost
export async function addCostData(ingredient, value, unit, token) {
  const response = await restutils.postWithBody(
    backendAddress + addCostBackend,
    token,
    JSON.stringify({
      'ingredient': ingredient,
      'value': value,
      'unit': unit,
    })
  )
  return response;
}

export async function deleteCostData(cost, token) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteCostBackend,
    token,
    JSON.stringify({
      cost  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt cost
    })
  )
  return response;
}

export async function modifyCostData(cost, token) {
  const response = await restutils.putWithBody(
    backendAddress + modifyCostBackend,
    token,
    JSON.stringify({
      cost  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt cost
    })
  )
  return response;
}


export function logSuccess(responseJson) {
  console.log('Logged in');
  console.log('Role: ' + responseJson.role);
}

export function logFailure() {
  console.log('Failed to log in');
}

