import { Container, Grid, Paper, TextField, Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8),
  },
}))

function Home({ pay }) {
  const classes = useStyles()

  return (
    <section>
      <Container maxWidth="md" >
        <Grid container direction="row" justifyContent="center" alignItems="center" >
          
          <Grid item xs>
            <Paper className={classes.paper}>
              Login
              <FormControl>
                <TextField id="login" label="login" variant="standard" />
                <TextField id="password" label="password" variant="standard" type="password"/>
                <Button variant="outlined">Entrar</Button>
              </FormControl>
            </Paper>
          </Grid>

        </Grid>
      </Container>
      
    </section>
  )
}

export default Home