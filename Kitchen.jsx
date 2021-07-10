import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, table, fat, quantity, total) {
  return { name, table, fat, quantity, total };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function kitchen() {
  const classes = useStyles();
  const [foods,setFood]= useState([])
   useEffect( () => {
  
  
   axios.get('http://localhost:8080/getkitchen')
      .then(res => {
        console.log(res.data)
        setFood(res.data)
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[])  
console.log(foods)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>food name</StyledTableCell>
            <StyledTableCell align="right">table</StyledTableCell>
            {/*<StyledTableCell align="right">xyzz&nbsp;(g)</StyledTableCell>*/}
            <StyledTableCell align="right">quantity&nbsp;</StyledTableCell>
            <StyledTableCell align="right">total&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.foodname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.tableno}</StyledTableCell>
              
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
