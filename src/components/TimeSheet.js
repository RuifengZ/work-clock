import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function TimeSheet() {
  const [clockIns, setclockIns] = useState(initialState);

  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="time" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}
