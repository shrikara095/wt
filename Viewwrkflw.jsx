import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';

import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={20} variant="filled" {...props} />;
}

const useStyles6 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const useStyles4 = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '62ch',
    },
  },
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '30ch',
  },
  divide:{
      marginBottom:'10px',
  },
  flabel:{
    marginTop:'20px',
  },
    flabel1:{
      marginTop:'50px',
    },
    divide:{
        marginBottom:'10px',
      },
        Button1:{
            marginLeft:"536px",
    },
    firstField:{

      margin: theme.spacing(1),
      width: '25ch',
    
    }
}));

const useStyles = makeStyles((theme) => ({
  root: {
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
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const classes1= useStyles1();
  const classes2 = useStyles2();
  const classes4=  useStyles4();
  const classes6=  useStyles6();
  const [count,setCount]=React.useState(1)
  const [expanded, setExpanded] = React.useState(false);
  const [cards,setCard]=React.useState([])
   const [open, setOpen] = React.useState(true);
    const [op,setop] = React.useState(false);
function pop()
{
  setop(true);
}
  const handleClick = () => {
    
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
console.log(props)
var fid=props.id1
window.fid1=props.id1
console.log(fid)
   useEffect( () => {
    
    let idfood={
      id:fid
    }
   console.log("hii")
   console.log(idfood)
   axios.post('http://localhost:8080/getfoodback',idfood)

      .then(res => {
      setCard(res.data)
       
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[]) 
function place(e,count1)
{
  console.log(window.qw)
   e.preventDefault();
  let getdtl={
    foodid:props.id1,

    name:document.getElementById('outlined-basic').value,
    review:document.getElementById('outlined-multiline-static').value,
  };
    axios.post('http://localhost:8080/foodreview',getdtl)
  .then((res) => {
    alert(res.data)
}).catch((error) => {
    console.log(error)
});
  console.log(getdtl)
}


function placeord(e,count1)
{
  console.log(window.qw)
  
   e.preventDefault();
  let getdtl={
    foodid:props.id1,
    foodname:window.qw,
    quantity:count,
    tableno:document.getElementById('tableno').value
  };
    axios.post('http://localhost:8080/orders',getdtl)
  .then((res) => {
    alert(res.data)
}).catch((error) => {
    console.log(error)
});
  console.log(getdtl)
}
function setname(nm)
{
  window.qw=nm
}
function popup()
{
  console.log("hii")
   return (

    <div className={classes6.root}  >
     {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar

      </Button>*/}
{/*      {handleClick()}*/}
       {console.log("mannnsdnsdn")}

      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          order is placed!
        </Alert>
      </Snackbar>

     {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>*/}
    {/*  <Alert severity="success">This is a success message!</Alert>*/}
    </div>
  );
}
// window.foodnm=nm
// console.log("hebbar")
// console.log(window.foodnm)
  return (
     <div className={classes1.root}>

      <Grid container spacing={4}>
    
    

    {cards.map(card=><>
      {setname(card.name)}
     <Grid item xs={4}>

      <Card className={classes.root}>
      <CardHeader

        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.name}
        // settit={(title)=>settit(title)}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={card.url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.info}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       <Typography style={{marginLeft:'4ch'}} variant="body1" component="h4">
         PRICE:${card.Price}
    
</Typography>
      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </Grid>
    <Grid item xs={8}>
   {/* {console.log(count)}*/}
     <form  onSubmit={(e,count)=>place(e,count)} noValidate>
      <TextField style={{marginBottom:'5ch'}} id="outlined-basic" label="name" variant="outlined" />

        {/*<Divider/> */}
     
     <TextField className={classes4.root} style={{width:'82ch'}}
          id="outlined-multiline-static"
          label="add review"
          multiline
          rows={6}
          
          variant="outlined"
        />
         <Button type="submit" style={{marginTop:'1ch'}} variant="outlined" color="secondary" size="large" className={classes4.Button1}>
        add
        </Button>
        </form>


      
     {/*<IconButton aria-label="share">*/}
           <form  onSubmit={(e,count)=>placeord(e,count)} noValidate>
           <div style={{marginTop:'5ch'}} className={classes2.root}>
            <FormLabel  component="legend" className={classes2.flabel}>select quantity</FormLabel>
      <div>
        <Badge color="secondary" id="hello" value={count} badgeContent={count}>
          <AddCircleIcon />
        </Badge>
     <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
         {/*</IconButton>*/}
     
    </div>
        <TextField style={{marginBottom:'5ch',width:'40ch'}} id="tableno" label="table no" variant="outlined" />
       
    </div>
     <Button type="submit" onClick={pop} variant="outlined" color="secondary" size="large" className={classes4.Button1}>
  order
</Button>
</form>
  </Grid>
{op==true?
  <div className={classes6.root}><Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          your order is successful <span> 😋</span>
          {console.log("ragle")}
        </Alert>
      </Snackbar></div>
     :null}
  </>

    )
    
  }
  
  </Grid>
  </div>

  );}












