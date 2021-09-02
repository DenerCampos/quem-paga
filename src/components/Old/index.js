import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Collapse, FormControlLabel, Grid } from "@material-ui/core";
import Pay from "../Pay";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
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
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Mesês anteriores"
      />
      <div className={classes.container}>
        <Collapse in={checked} collapsedSize={40}>
          <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10}>
            <Grid item xs={8} >
              {
                data.map( (value)=> {
                  return <Pay>{value}</Pay>
                })
              }
            </Grid>
          </Grid>
        </Collapse>
      </div>
    </div>
  )
}
