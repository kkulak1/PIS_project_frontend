import { TextField } from "@mui/material"


export default function IdTextField({label, value, onChange, type="text", id=null}) {
  id = id ?? `${label.toLowerCase()}-text-field`
  return (
  <TextField 
    id={id}
    label={label}
    sx={{mt: 1}}
    value={value}
    type={type}
    onChange={onChange}
  />)
}
