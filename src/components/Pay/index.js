import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActionArea, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
  })
  
  export default function ImgMediaCard(children) {
    const classes = useStyles()
    let pay = children.children
    //console.log(pay)
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Dark Souls"
            height="140"
            image="/images/dark.jpg"
            title="Dark Souls"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Parabéns  {pay.member.name} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Você irá pagar o mês de  {pay.month} . Lembrando que o vencimeto é dia:  {pay.dueDate} .
              Ajuda nóis ai!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Já paguei
          </Button>
          <Button size="small" color="primary">
            Não é minha vez
          </Button>
        </CardActions>
      </Card>
    )
  }
