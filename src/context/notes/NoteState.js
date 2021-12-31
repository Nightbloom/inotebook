// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{

    const notesinitial = [
        {
          "tag": "General",
          "_id": "61bdc5e9968ee56bfd0bdeb0",
          "user": "61bd91f6471a193fd799d859",
          "title": "My title",
          "description": "Please wake up early",
          "tags": "General",
          "date": "2021-12-18T11:28:41.089Z",
          "__v": 0
        },
        {
          "tag": "General",
          "_id": "61bdc63bd2ef7f8b031fdb35",
          "user": "61bd91f6471a193fd799d859",
          "title": "My title",
          "description": "Please wake up early",
          "tags": "Myspace",
          "date": "2021-12-18T11:30:03.290Z",
          "__v": 0
        },
        
      ]

      const [notes, setNotes] = useState(notesinitial)

      //Add a Note
      const addNote = (title, desciption, tag)=>{
        // TODO: API call
        const note =  {
          "tag": "General",
          "_id": "61bdc63bd2ef7f8b031fdb300",
          "user": "61bd91f6471a193fd799d8597",
          "title": title,
          "description": desciption,
          "tags": tag,
          "date": "2021-12-18T11:30:03.290Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Delete a Note
      const deleteNote = (id)=>{
        // TODO: API call
        console.log("Description of the id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
      }

      //Edit a Note
      const editNote = ()=>{

      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;