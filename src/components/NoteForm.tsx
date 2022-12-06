import React from "react";
import { Form, Button, Stack, Row, Col, FormGroup } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

function NoteForm() {
  return (
    <Form>
      <Stack>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" required />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup controlId="tags">
              <Form.Label>Tags</Form.Label>
                < CreatableSelect isMulti />
            </FormGroup>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
}

export default NoteForm;
