import CentredTextFieldGrid from "./CentredTextFieldGrid"

export default function CentredPasswordFieldGrid({value, onChange, id=null, xs=12}) {
  return (<CentredTextFieldGrid label="Password" value={value} onChange={onChange} type="password" id={id} xs={xs} />)
}
