import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import profile from './images/shri.jpeg';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button:{
    marginLeft: theme.spacing(5)
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List
      className={classes.root}
    >
   
     
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
        <Avatar alt="logo" src={profile} />
        </ListItemIcon>
        <ListItemText primary="Shrikara hebbar" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            {/* <EmailOutlinedIcon /> */}
            </ListItemIcon>
            <ListItemText secondary="hshrikara@gmail.com" />
            </ListItem>
            <ListItem  className={classes.nested}>
            <ListItemIcon>
            <GroupAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText secondary="Developer" />
          </ListItem>
          <ListItem  className={classes.nested}>
          <Button variant="outlined" size="small" className={classes.button}>view profile</Button>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}