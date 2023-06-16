import { useNavigate } from "react-router-dom"


export const backendAddress = 'http://localhost:8080'
export const logIn = makePath("", "api", "v1", "auth", "authenticate");
export const registration = makePath("", "api", "v1", "auth", "register");
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

