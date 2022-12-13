import React from "react";
import { NoteForm } from "./NoteForm";
import { NoteData } from "../App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};


function NewNote( { onSubmit }: NewNoteProps ) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm />
    </>
  );
}

export default NewNote;
