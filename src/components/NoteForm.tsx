import React from "react";
import { Form, Button, Stack, Row, Col, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const markdownRef = React.useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = React.useState<Tag[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: tagsRef.current.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack>
        <Row className="mb-2">
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleRef}
                type="text"
                placeholder="Enter title"
                required
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  if (tags) {
                    setSelectedTags(
                      tags.map((tag) => {
                        return { id: tag.value, label: tag.label };
                      })
                    );
                  }
                }}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={12}
            placeholder="Enter you note"
            ref={markdownRef}
          />
        </FormGroup>
        <Stack
          gap={2}
          direction="horizontal"
          className=" mt-2 justify-content-end"
        >
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="..">
            <Button variant="outline-secondary" type="button">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}

export default NoteForm;
