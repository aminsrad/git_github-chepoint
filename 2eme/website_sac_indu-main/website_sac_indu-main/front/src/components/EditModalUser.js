import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { updateUser } from "../redux/actions/user";

const EditModalUser = ({ el }) => {
  const [modal, setModal] = useState(false);
  ///** */

  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  /******* */
  const clearForm = () => {
    setpassword("");
  };

  //** */
  const update = (e) => {
    e.preventDefault();
    const newpass = { password };

    dispatch(updateUser(el._id, newpass));
    clearForm();
    alert("Password mis jour");
  };
  //** */

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit password
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ paddingTop: "90px" }}>
        <ModalHeader toggle={toggle}>edit Password</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="examplePassword">New password</Label>
              <Input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={update}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModalUser;
