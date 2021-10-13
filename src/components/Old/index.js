import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Switch, Collapse, FormControlLabel, Grid } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"
import Pay from "../Pay"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())

const useStyles = makeStyles((theme) => ({

}));

export default function Old() {

  const { data, error } = useSWR('/api/data', fetcher)

  console.log("SWR: ", data)

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
        <Grid item>
          <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Mesês anteriores"
          />
        </Grid>
      </Grid>
      
      <Collapse in={checked} collapsedSize={0}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item>
            <Carousel>
              {
                data.map( (value)=> {
                  return <Pay>{value}</Pay>
                })
              }
            </Carousel>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  )
}
