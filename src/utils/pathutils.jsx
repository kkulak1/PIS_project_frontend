import { useNavigate } from "react-router-dom"


export const backendAddress = 'http://localhost:8080'
export const logIn = makePath("", "log_in");

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

