import React,{useEffect,useState} from 'react';
import ReactDOM from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom';
import Dashboard from './Dashboard';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import axios from 'axios';

export default function ListItems(props){
  const history=useHistory();
  const [cat,setCat]=useState([]);
   useEffect( () => {
  
  
   axios.get('http://localhost:8080/getcatg')
      .then(res => {
        setCat(res.data)
       
 }).catch(error=>{
      console.log(error)
      console.log("inside catch") })
      
},[])  

  return(
    cat.map(row=>
    <ListItem button onClick={() => props.allf(false,false,false,true,false) }>
      <ListItemIcon>
   {/*   <AddCircleOutlineIcon />*/}
        <FastfoodIcon/>
      </ListItemIcon>
      
      <ListItemText primary={row.name} />
  
    </ListItem>)
  // <div>
   
  //   <ListItem button onClick={() => props.allf(true,true,false,false,false) }>
  //     <ListItemIcon>
  //  {/*   <AddCircleOutlineIcon />*/}
  //       <FastfoodIcon/>
  //     </ListItemIcon>
      
  //     <ListItemText primary="Create workflow" />
  
  //   </ListItem>
    
  //   <ListItem button onClick={() => props.allf(false,false,true,false,false) }>
  //     <ListItemIcon>
          
  //      {/* <VisibilityIcon/>*/}
  //        <FastfoodIcon/>
  //     </ListItemIcon>
  //     <ListItemText primary="view workflows" />
  //   </ListItem>
  //   <ListItem button onClick={() => props.allf(false,false,false,false,false) }>
  //     <ListItemIcon>
  //    {/* <CreateIcon />*/}
  //     <FastfoodIcon/>
  //     </ListItemIcon>
  //     <ListItemText primary="Initiate workflow" />
  //   </ListItem>
 
  //   <ListItem button onClick={() => props.allf(false,false,false,false,false) }>
  //     <ListItemIcon>
  //       {/*<LayersIcon />*/}
  //        <FastfoodIcon/>
  //     </ListItemIcon>
  //     <ListItemText primary="Integrations" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <ExitToAppIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="logout" />
  //   </ListItem>
  // </div>
);

}
// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );