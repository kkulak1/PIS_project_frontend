import { useNavigate } from "react-router-dom"


export const backendAddress = 'http://localhost:8080'
// export const backendAddress = 'http://localhost:8880'

export const logIn = makePath("", "authenticate");
// export const logInBackend = makePath("", "api", "v1", "auth", "authenticate");
export const logInBackend = '/api/v1/auth/authenticate';

export const registration = makePath("", "register");
// export const registrationBackend = makePath("", "api", "v1", "auth", "register");
export const registrationBackend = '/api/v1/auth/register';

export const addRecipeBackend = '/api/v1/recipe/add';
export const changeRecipeBackend = '/api/v1/recipe/change-name';
export const deleteRecipeBackend = '/api/v1/recipe/delete';
export const getRecipeBackend = '/api/v1/recipe/get';
export const getRecipeDetailsBackend = '/api/v1/recipe/get-details';

export const putRecipeChangeDurationBackend = '/api/v1/recipe/change-duration';

export const changeStepBackend = '/api/v1/step/change-steps';

export const addQuantityBackend = '/api/v1/quantity/add';
export const deleteQuantityBackend = '/api/v1/quantity/delete';
export const modifyQuantityBackend = '/api/v1/quantity/modify';

export const addIngredientBackend = '/api/v1/ingredient/add';
export const deleteIngredientBackend = '/api/v1/ingredient/delete';
export const modifyIngredientBackend = '/api/v1/ingredient/modify';

export const addCostBackend = '/api/v1/cost/add';
export const deleteCostBackend = '/api/v1/cost/delete';
export const modifyCostBackend = '/api/v1/cost/modify';


export const overview = makePath("", "overview");

export const textRoot = "/";
export function navigateToLogin() {
  let navigate = useNavigate;
  navigate(logIn);
}

export function makePath(...segments) {
  return segments.join("/");
}


export function pickOverviewPath(role) {
  return `/${role}_home/overview`
}

