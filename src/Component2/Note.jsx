import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from '@mui/material/IconButton';

const Note = (props) => {
  
  const deleteData = ()=>{
    props.delete(props.id);
  }
  return (
    <>
      <div className="card" style={{width: 250}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
        <IconButton aria-label="delete" size="small"  id="iconbtn" onClick={deleteData}>
          <DeleteOutlineIcon className="DeleteButton" />
      </IconButton>
  </div>
</div>
    
    </>
  );
};
export default Note;
