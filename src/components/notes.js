import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

const Notes = ( {id, text , date, handleDeleteNote} ) => {
  return (
    <div className='note'>
        <p>{ text }</p>
        <div className='noteFooter'>
            <p>{date}</p>
            <MdDeleteForever className="deleteIcon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Notes