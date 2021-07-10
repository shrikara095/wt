import React from 'react';
import Forms from './Forms';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor:'rebeccapurple'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height:400,
  },
  fixedHeight1: {
    height: 400,
  },
  logo:{
      marginRight:'10px'
  },
  space:
  {
    paddingLeft:'30px',
  }
}));

export default function FormsMain()
{
    const classes = useStyles();
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return(
  <div>
  <Dashboard/>

 <main className={classes.content}>  
<div className={classes.appBarSpacer} /> 
<Container  justify='center' className={classes.container}>
  <Grid container spacing={3}>
<Grid item xs={12} >
              <Grid  container 
               direction="column-reverse"
                justify="center"
                alignItems="center" >
              <Grid item xs={12} md={7} className={classes.space}>
              <Paper className={classes.paper}>

                <Forms />
              </Paper>
              </Grid>
              </Grid>
            </Grid>
            
           </Grid>
          {/* <SignIn/> */}
          
        </Container>
       </main> 
       </div>
);
}