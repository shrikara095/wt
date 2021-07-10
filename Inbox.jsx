import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import thuzi from './images/thuzi.jpeg';
import chel from './images/chel.jpeg';
import kold from './images/kolder.jpeg';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '66ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
 
}));

export default function Inbox(props) {
  const classes = useStyles();
  const [reviews,setReview]=React.useState([]);
  var fid=props.id1;
   useEffect( () => {
    console.log("useEff")
    let idfood={
      id:fid,
    }
   axios.post('http://localhost:8080/reviewfood',idfood)
      .then(res => {
        console.log("hellahela")
        console.log(res.data)
      setReview(res.data)
       
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[])  

console.log("shititt")
  return (
   reviews.map(review=> <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="suja" src={thuzi} />
        </ListItemAvatar>
        <ListItemText
          primary={review.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
             {review.review}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li"/>
  
    </List>)
  );
}