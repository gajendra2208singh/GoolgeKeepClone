import React,{useState}from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props)=>{
    const [note,setNote] = useState({
        title:"",
        content:"",
    });

    const[expend,setExpend] = useState(false);
    const inputEvent = (event)=>{
        const {value,name} = event.target;

            setNote((previousData)=>{
                return {
                    ...previousData,
                    [name]:value,
                }
            })
            console.log(note);
    }

    const buttonEvent = ()=>{
        props.createEvent(note);
        setNote({
            title:"",
            content:"",
        })
    }

    const expentIt = ()=>{
          setExpend(true);  
    }
    const expendDbl = ()=>{
        setExpend(false)
    }
    return(
    <>

<div className="card  cretenote" id="cardnt" onDoubleClick={expendDbl} >
<div className="card-body" id= "cardBD">
<form className="form_createNote">
            <input
                type="text" 
                name ="title"
                value= {note.title}
                onChange={inputEvent} 
                className="inputfield"
                placeholder="Title" 
                autocomplate="off"
                
                onClick={expentIt}
             /> 
           {  expend ?    
            <textarea 
            className="textarea" 
            name = 'content'
              value={note.content} 
              onChange = {inputEvent}
               placeholder="Write a note..."
               >
               </textarea>:null}
    </form>
            {expend? 
            <Button id="button" onClick = {buttonEvent}>
            <AddIcon className = "addIcon_plus" />
            </Button>:null
            }
</div>
</div>



   {/* <div className="cretenote" onDoubleClick={expendDbl}>
    <form className="form_createNote">
            <input
                type="text" 
                name ="title"
                value= {note.title}
                onChange={inputEvent} 
                className="inputfield"
                placeholder="Title" 
                autocomplate="off"
                cols ={50}
                onClick={expentIt}
             /> 
           {  expend ?    
            <textarea 
            className="textarea" 
            name = 'content'
              value={note.content} 
              onChange = {inputEvent}
               placeholder="Write a note..."
               cols={50}
                rows={0}>
               </textarea>:null}
            {expend? 
            <Button id="button" onClick = {buttonEvent}>
            <AddIcon className = "addIcon_plus" />
            </Button>:null
            }
    </form>
   </div> */}

    </>
    )
}
export default CreateNote;