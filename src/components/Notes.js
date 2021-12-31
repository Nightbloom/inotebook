import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";

const Notes = ()=>{
     const context = useContext(noteContext);
     const {notes} = context;
     return(
         <>
            <AddNotes/>
            <div className="row my-3">
             <h2>You Notes</h2>
             {
                 notes.map((note)=>{
                     return <Noteitem note={note}/>
                    })
                }
            </div>
        </>
     )
     
}

export default Notes