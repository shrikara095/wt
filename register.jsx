import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '92ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        // minWidth: 120,
        width: '300px',
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

const Form = ({ handleClose }) => {
  const classes = useStyles();
  const classes4 = useStyles4();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [category,setCatg]=useState('');
  // const [password, setPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [pno, setPno] = useState('');
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, lastName, email, password);

//   };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

  };
//   onSubmit={handleSubmit}
function submit1(e){
    handleChange(e)
    e.preventDefault();
    const result={foodid:firstName,category:category,foodname:lastName,imageurl:userid,fooddesc:email,foodprice:pno}
   console.log(result)

    axios.post('http://localhost:8080/admin',result)
    .then((res) => {
      alert(res.data)
  }).catch((error) => {
      console.log(error)
  });
  }

  return (
    <>
     <Typography style={{marginLeft:'4ch'}} variant="h4" component="h4">
         add food
    
</Typography>

    <form className={classes.root}  onSubmit={(e)=>submit1(e)}>
      <TextField
        label="Foodid"
        variant="outlined"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="foodname"
        variant="outlined"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="imageurl"
        variant="outlined"
        required
        value={userid}
        onChange={e => setUserid(e.target.value)}
      />
      <TextField
        label="category"
        variant="outlined"
        required
        value={category}
        onChange={e => setCatg(e.target.value)}
      />
     {/* <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />*/}
   
      
        <TextField
          id="outlined-password-input"
          label="price"
         variant="outlined"
         value={pno}
        onChange={e => setPno(e.target.value)}
        />
        <TextField className={classes4.root} style={{width:'92ch'}}
          id="outlined-multiline-static"
          label="food information"
          multiline
          rows={6}
          value={email}
          variant="outlined"
          onChange={e=>setEmail(e.target.value)}
        />
       {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
        <Select
          native
          value={state.name}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>manager</option>
          <option value={20}>Tester</option>
          <option value={30}>devloper</option>
          <option value={40}>lead</option>
        </Select>
      </FormControl>*/}
      <div>
        {/*<Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>*/}
        <Button type="submit" variant="contained" color="primary">
          add
        </Button>
      </div>
    </form>
    </>
  );
};

  
export default Form;