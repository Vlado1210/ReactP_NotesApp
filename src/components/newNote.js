import React, { useState } from 'react'

const NewNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) =>{
        if(200 >= event.target.value.length){
            setNoteText(event.target.value);
        }
    }
    const handleClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
        else{
            alert("Cant upload empty notes")
            setNoteText('')
        }

    }

  return (
<div className='note new'>
    <textarea placeholder='Write your note here'
    rows='8' cols='10'onChange={handleChange} value={noteText}/>
    <div className='noteFooter'>
        <p>{200 - noteText.length} characters remaining</p>
        <button className='saveButton' onClick={handleClick}>Save</button>
    </div>
</div>
  )
}

export default NewNote