import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    textAlign: "center",
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: 100,
  },
  textCenter: {
    textAlign: "center",
  }
}));

export default function index() {
  const classes = useStyles();

  return (
    <div>
      <Paper variant="outlined" square className={classes.paper}>
        <Grid container spacing={2} direction="row" justifyContent="space-around" alignItems="center">
          <Grid item>
            <MonetizationOnIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography variant="h2" >
              Quem PAGA?
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
