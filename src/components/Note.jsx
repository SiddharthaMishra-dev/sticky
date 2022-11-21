import React from "react";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>
    </div>
  );
}

export default Note;
