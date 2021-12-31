// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const notesinitial = []
  const [notes, setNotes] = useState(notesinitial)
  

  // Get all a Note
  const getNotes = async () => {
    // TODO: API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZDkxZjY0NzFhMTkzZmQ3OTlkODU5In0sImlhdCI6MTYzOTgxODkzMH0.GGsBjjDvoUin5M4g-Ntw5EYHTsCwH9dnB8ZPjISy9jQ'
      }
    });
    const json = await response.json()
    console.log(json);
    setNotes(json)

  }
  

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API call
    console.log("This is add");
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZDkxZjY0NzFhMTkzZmQ3OTlkODU5In0sImlhdCI6MTYzOTgxODkzMH0.GGsBjjDvoUin5M4g-Ntw5EYHTsCwH9dnB8ZPjISy9jQ'
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json() 
    console.log(json);

    
    const note = {
      "_id": "61bdc63bd2ef7f8b031fdb333",
      "user": "61bd91f6471a193fd799d8597",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-12-18T11:30:03.290Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  
  
  //Delete a Note
  const deleteNote = async (id) => {
    // TODO: API call
    
    console.log("This is delete");
    
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZDkxZjY0NzFhMTkzZmQ3OTlkODU5In0sImlhdCI6MTYzOTgxODkzMH0.GGsBjjDvoUin5M4g-Ntw5EYHTsCwH9dnB8ZPjISy9jQ'
      }
    });
    const json = await response.json()
    console.log(json);


    console.log("Description of the id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // TODO: API call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZDkxZjY0NzFhMTkzZmQ3OTlkODU5In0sImlhdCI6MTYzOTgxODkzMH0.GGsBjjDvoUin5M4g-Ntw5EYHTsCwH9dnB8ZPjISy9jQ'
      },
      body: JSON.stringify({title, description, tag})
    });
    // const json = response.json();
  

  //Logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }
}

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
    {props.children}
  </NoteContext.Provider>
)

}

export default NoteState;