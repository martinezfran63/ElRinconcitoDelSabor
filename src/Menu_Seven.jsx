import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import escamocha from './images/escamocha_1.jpg'
import fresasconcrema from './images/fresasconcrema.jpg'
import gazpacho from './images/gazpacho_1.jpg'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
  paper: {

  },
}));




export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function FormRow() {
    return (
    
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Card raised="false" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={fresasconcrema}
        title="Paella dish"
      />
    </Card></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Card raised="true" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={escamocha}
        title="Paella dish"
      />
    </Card></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Card raised="true" className={classes.card}>

      <CardMedia
        className={classes.media}
        image={gazpacho}
        title="Paella dish"
      />
    </Card></Paper>
        </Grid>
      </React.Fragment>

    );
  }

  return (
    <div>

<div className={classes.root}>
      <Grid container spacing={0}>

       <Typography variant="h1" component="h3" gutterBottom="true" color='secondary'>
        Frutas Preparadas
      </Typography>
        <Grid container item xs={12} spacing={0} raised="true" >
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>

    <Card raised="true" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={gazpacho}
        title="Paella dish"
      />
    </Card>
    <Card raised="true" className={classes.card}>
      <CardMedia
        className={classes.media}
        image={gazpacho}
        title="Paella dish"
      />
    </Card>
    <Card raised="true" className={classes.card}>

      <CardMedia
        className={classes.media}
        image={gazpacho}
        title="Paella dish"
      />
 
    </Card>
    
    
    </div>

  );
  
}
