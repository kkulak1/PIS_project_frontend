import CentredTextFieldGrid from "./CentredTextFieldGrid"

export default function CentredPasswordFieldGrid({value, onChange, id=null, xs=12, label="Password"}) {
  return (<CentredTextFieldGrid label={label} value={value} onChange={onChange} type="password" id={id} xs={xs} />)
}
