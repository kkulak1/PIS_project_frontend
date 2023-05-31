import { CentredTextFieldGrid } from "./CentredTextFieldGrid"

export default function CentredPasswordFieldGrid(value, onChange, id=null, xs=12) {
  return CentredTextFieldGrid("Password", value, onChange, "password", id, xs)
}
