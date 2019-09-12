import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    marginTop:'30px',
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor:'#FED801',
    color:'black',
    width:'150px',
    height:'40px',
    fontWeight:'bold'
  },

}));

export default function Chips(props) {
  const classes = useStyles();


  function chip(data){
    console.log(props)
    props.getproduct(data)
    

  }



  return (
    <div className={classes.root}>

      <Chip
        label={props.catogey}
        className={classes.chip}
        onClick={()=>chip(props.catogey)}
      />
     




    </div>
  );
}