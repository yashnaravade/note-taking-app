import React from "react";
import { Form, Button, Stack, Row, Col, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

function NoteForm() {
  return (
    <Form>
      <Stack>
        <Row className="mb-2">
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" required />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect isMulti />
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
