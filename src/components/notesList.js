import React from 'react';
import Notes from './notes';
import NewNote from './newNote';

const NotesList = ({notes , handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notesList'>
      {notes.map((note)=>{
        return  <Notes id = {note.id} text = {note.text} date = {note.date} handleDeleteNote = {handleDeleteNote} />

      })}
      <NewNote handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesList