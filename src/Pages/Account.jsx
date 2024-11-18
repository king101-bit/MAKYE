import Avatar from "boring-avatars";
import React from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";

const Account = () => {
  return (
    <>
      <Container>
        <h1>Edit your account</h1>
        <hr />
        {/* Add your account-related components here */}
        <FormGroup>
          <Avatar
            size={100}
            name="John Doe"
            variant="marble" // Options: "beam", "marble", "pixel", "sunset", "ring", "bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />{" "}
          <br />
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
          <Form.Text className="text-muted">
            This username will be used for your login and to access your
            account.
          </Form.Text>
          <br />
          <Form.Label>Change Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
          <Form.Text className="text-muted">
            Your password should be at least 12 characters long and contain at
            least one uppercase letter, one lowercase letter, one number, and
            one special character.
          </Form.Text>
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            This email will be used for your login and to receive important
            updates and notifications.
          </Form.Text>
          <br />
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
          />
          <Button className="mt-4">Save changes</Button>
        </FormGroup>
      </Container>
    </>
  );
};

export default Account;
