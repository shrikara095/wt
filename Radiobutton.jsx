import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
     flabel:{
      marginTop:'50px',
    },
    divide:{
        marginBottom:'10px',
    },
  }));
export default function Radiobutton() {
    const classes = useStyles();
 
  const [value, setValue] = React.useState('approve');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <div>
    <Divider className={classes.divide}/>
    <FormControl component="fieldset">
     
      <FormLabel component="legend" className={classes.flabel}>add action</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="approve" control={<Radio />} label="approve" />
        <FormControlLabel value="deny" control={<Radio />} label="deny" />
        <FormControlLabel value="cancel" control={<Radio />} label="cancel" />
       
      </RadioGroup>
    </FormControl>
    </div>
  );
}
