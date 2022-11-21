import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);
  function addNote(newNote) {
    setNote((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNote(id) {
    setNote((prevNote) => {
      return prevNote.filter((singleNote, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((singleNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
