import { Grid } from "@mui/material"
import IdTextField from "./IdTextField"
import CenteringGrid from "./CenteringGrid"

export default function CentredTextFieldGrid({label, value, onChange, type="text", id=null, xs=12}) {
  return (
    <Grid item xs={xs}>
        <CenteringGrid>
            <IdTextField label={label} value={value} onChange={onChange} type={type} id={id}/>
        </CenteringGrid>
    </Grid>
  )
}
