import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Carousel from "react-material-ui-carousel"
import Title from '../components/Title'
import Pay from '../components/Pay'
import Old from '../components/Old'

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(`${process.env.URL_API}/api/whopays`)
  const pay = await res.json()

  return {
    props: {
      pay,
    },
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    //margin: '30px auto',
  },
  background: {
    backgroundColor: theme.palette.primary.light
  },
  control: {
    paddingBottom: theme.spacing(10),
  },
  divisor: {
    margin: "30px 0",
  }
}))

function Home({ pay }) {
  const classes = useStyles()

  return (
    <section>
      <Container maxWidth="md" >
        <Grid container direction="row" justifyContent="center" alignItems="center" >

            <Grid item xs={12} className={classes.control}>
              <Title></Title>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                {/* <Pay>{pay}</Pay> */}
                <Carousel animation="slide" interval="10000">
                  <Pay>{pay}</Pay>
                  <Pay>{pay}</Pay>
                </Carousel>
              </Grid>
            </Grid>

            <hr className={classes.divisor}></hr>

            {/* <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
              <Grid item xs={12} md={6} >
                <Typography>Mesês anteriores</Typography>
              </Grid>
            </Grid> */}

            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
              <Grid item xs={12} md={6} >
                <Old>{pay}</Old>
              </Grid>
            </Grid>


            {/* <Old>{pay}</Old> */}

        </Grid>
      </Container>
      
    </section>
  )
}

export default Home