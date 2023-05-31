import { Grid, CenteringGrid } from "@mui/material"

export function CentredTextFieldGrid(label, value, onChange, type="text", id=null, xs=12) {
  return (
    <Grid item xs={xs}>
        <CenteringGrid>
            {placeTextField(label, value, onChange, type, id)}
        </CenteringGrid>
    </Grid>
  )
}
