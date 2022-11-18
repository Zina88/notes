import Note from 'components/Note';
import AddNote from 'components/AddNote';

const NoteList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map(({ id, text, date }) => (
        <Note
          key={id}
          id={id}
          text={text}
          date={date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
