import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import three from './images/three.JPG'
import escamocha from './images/escamocha_1.jpg'
import fresasconcrema from './images/fresasconcrema.jpg'
import gazpacho from './images/gazpacho_1.jpg'
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.secondary,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const tileData = [
    {
      img: fresasconcrema,
      title: 'Coctel ',
      author: '10.00',
    },
    {
     img: escamocha,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: gazpacho,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: escamocha,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: fresasconcrema,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: gazpacho,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: escamocha,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: fresasconcrema,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: escamocha,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },
   {
     img: gazpacho,
     title: 'Coctel ',
     author: '10.00',
   },{
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },{
     img: fresasconcrema,
     title: 'Coctel ',
     author: '10.00',
   },{
     img: three,
     title: 'Coctel ',
     author: '10.00',
   },
  ];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <AppBar position="static" color="inherit"  >
        <Toolbar >
          <Typography  variant="h5" align="center" className={classes.title}>
          Frutas Preparadas
          </Typography>
        </Toolbar>
      </AppBar>

      <GridList className={classes.gridList} cols={6}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
