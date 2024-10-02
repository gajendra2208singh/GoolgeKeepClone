import React,{useState}from "react";
import Header from "./Header";
// import Footer from "./Foooter";
import CreateNote from "./CreateNote";
import Note from "./Note";
const GoogleKeep = ()=>{

     const [addItems,setAddItems] = useState([]);

    const noteEvent = (note)=>{
        setAddItems((PreviousItems)=>{
            return [
                ...PreviousItems, note
            ]
        })
    }

    const deleteNote = (id)=>{
        setAddItems((oldValue)=>{
          return  oldValue.filter((currentData,indx)=>{
            return indx !== id 
            })
        })
    }

    return(
        <>
           <Header/>
            <CreateNote createEvent={noteEvent}/>
            <div className="notecontainer">  
           { 
            addItems.map((val,index) =>{
                return(
                    <>
                         <Note
                            key={index}
                            id={index}
                            title = {val.title}
                            content = {val.content}
                            delete = {deleteNote}
                         />
                      
                    </>
                )
            })
           }
           </div>
           {/* <Footer/> */}
        </>
    )
}

export default GoogleKeep;