import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NotesList from './components/notesList';
import SearchBar from './components/searchBar';
import Header from './components/header';

function App() {
  const[notes, setNotes] = useState([{

    id : nanoid(),
    text : " esta es mi primera nota ??? ",
    date : " 18/12/2023 ",
  },
  {
    id : nanoid(),
    text : " esta es mi segunda nota",
    date : " 19/12/2023 ",
  },
  {
    id : nanoid(),
    text : " esta es mi tercera nota",
    date : " 20/12/2023 ",
  }
  ]);

  const [searchText, setSearchText] = useState('');

  const newNoteText = (text) =>{
    const date = new Date();
    const newNoteInfo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotesList = [...notes, newNoteInfo];
    setNotes(newNotesList);
    console.log(newNoteInfo);
  }
  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !== id )
    setNotes(newNotes);
  }
  return (
    <div className='container'>
      <Header/>
      <SearchBar handleSearchText = {setSearchText}/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText) )} handleAddNote={newNoteText} handleDeleteNote = {deleteNote}/>
    </div>
  );
}

export default App;
