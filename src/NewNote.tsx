import { Button, Col, Row, Stack } from "react-bootstrap"
import { NoteData, Tag } from "./App"
import { NoteForm } from "./NoteForm"
import { Link } from "react-router-dom"
import "./App.css"
import { useEffect, useState } from "react"

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (

    <>
       <Row className="align-items-center mb-4">
        <Col>
          <h1>New Note</h1>
        </Col>
      </Row>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}
