
import * as restutils from "../../utils/restutils"
import { addCostBackend, addIngredientBackend, addQuantityBackend, addRecipeBackend, backendAddress, changeRecipeBackend, changeStepBackend, deleteCostBackend, deleteIngredientBackend, deleteQuantityBackend, deleteRecipeBackend, getRecipeBackend, getRecipeDetailsBackend, logIn, modifyCostBackend, modifyIngredientBackend, modifyQuantityBackend, postRecipeAddDurationBackend, putRecipeChangeDurationBackend } from "../../utils/pathutils"

//recipe
export async function postAddRecipeData(name, description) {
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

export async function postRecipeChangeNameData(recipeId, newName) {
  const response = await restutils.postWithBody(
    backendAddress + changeRecipeBackend,
    token,
    JSON.stringify({
      'recipeId': recipeId,
      'description': description
    })
  )
  return response;
}

export async function deleteRecipeData(id) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteRecipeBackend,
    token,
    JSON.stringify({
      'id': id
    })
  )
  return response;
}

export async function getRecipeData() {
  const response = await restutils.get(
    backendAddress + getRecipeBackend,
    token
  )
  return response;
}

export async function getRecipeDetailsData(recipe) {
  const response = await restutils.getWithBody(
    backendAddress + getRecipeDetailsBackend,
    token,
    JSON.stringify({
      recipe    //nie wiem co tutaj dac jak w request ma byc po prostu obiekt recipe
    })
  )
  return response;
}

//duration
export async function postAddDurationData(amountOfTime, unit, recipe) {
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

export async function putRecipeChangeDurationData(recipe, newTime) {
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
export async function putStepChangeData(recipe, steps) {
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
export async function addQuantityData(value, unit, ingredient) {
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

export async function deleteQuantityData(quantity) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteQuantityBackend,
    token,
    JSON.stringify({
      quantity  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt quantity
    })
  )
  return response;
}

export async function modifyQuantityData(quantity) {
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
export async function addIngredientData(recipe, type, name, description) {
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

export async function deleteIngredientData(id) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteIngredientBackend,
    token,
    JSON.stringify({
      'id': id
    })
  )
  return response;
}

export async function modifyIngredientData(id, type, name, description) {
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
export async function addCostData(ingredient, value, unit) {
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

export async function deleteCostData(cost) {
  const response = await restutils.deleteWithBody(
    backendAddress + deleteCostBackend,
    token,
    JSON.stringify({
      cost  //nie wiem co tutaj dac jak w request ma byc po prostu obiekt cost
    })
  )
  return response;
}

export async function modifyCostData(cost) {
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

