import { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleChange = e => {
    const value = e.target.value;
    if (characterLimit - value.length >= 0) {
      setNoteText(value);
    }
  };

  const handleSaveClick = e => {
    e.preventDefault();

    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    } else {
      Report.failure('Error', 'field must not be empty...', 'Close');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;