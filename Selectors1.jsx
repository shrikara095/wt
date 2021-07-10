import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '62ch',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  Button1:{
            marginLeft:"386px",
    }
}));

export default function Selectors1() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event,id) => {
    setAge(event.target.value);
  };

  return (
    <div>
     
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>developer head</MenuItem>
          <MenuItem value={20}>manager</MenuItem>
          <MenuItem value={30}>QA member</MenuItem>
        </Select>
      </FormControl>
     
      
      <Button variant="outlined" color="secondary" size="large" className={classes.Button1}>
  Submit
</Button>
      
    </div>
  );
}
