import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PassUpdate from './PassUpdate';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function ProfileText() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
     
      <Typography component="h2" variant="h6" color="primary" gutterBottom>Personal Details</Typography>
        <TextField
          required
          id="outlined-required"
          label="FirstName"
          defaultValue="Shrikara"
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="LastName"
          defaultValue="Hebbar"
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="hshrikara@gmail.com"
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="userId"
          defaultValue="4NI123"
          variant="outlined"
        />
         <TextField
          required
          id="outlined-required"
          label="Role"
          defaultValue="developer"
          variant="outlined"
        />
        
        <TextField
          required
          id="outlined"
          label="DOB"
          defaultValue="26/07/2000"
          variant="outlined"
        />
         <Typography component="h2" variant="h6" color="primary" gutterBottom>update password</Typography>
        <PassUpdate/>
      
      
      </div>
    </form>
  );
}
