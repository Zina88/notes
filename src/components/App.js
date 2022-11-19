import { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import NoteList from './NoteList';

import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem('react-notes-app-data')) ?? [],
  );
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('theme')) ?? [],
  );

  useEffect(() => {
    window.localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = text => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = id => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header
          handleToggleDarkMode={setDarkMode}
          children={!darkMode ? 'Dark Mode' : 'Light Mode'}
        />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter(note =>
            note.text.toLowerCase().includes(searchText),
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
