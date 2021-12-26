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

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;