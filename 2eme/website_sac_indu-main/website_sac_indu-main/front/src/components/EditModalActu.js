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
import { updateActualites } from "../redux/actions/actualites";

const EditModalActu = ({ el }) => {
  console.log(el);
  console.log("this is the id" + el._id);
  const [modal, setModal] = useState(false);
  ///** */
  const [imageData, setImageData] = useState({
    data: {
      type: "Buffer",
      data: [],
    },
    contentType: "image/jpeg", // Replace with the actual image type
  });
  const [title, settitle] = useState(el.title);
  const [description, setdescription] = useState(el.description);

  const dispatch = useDispatch();
  //*** */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Use the FileReader API to read the selected file as ArrayBuffer
      const reader = new FileReader();
      reader.onload = (event) => {
        const arrayBuffer = event.target.result;

        // Convert the ArrayBuffer to an array of integers (Uint8Array)
        const uint8Array = new Uint8Array(arrayBuffer);

        // Update the imageData state
        setImageData({
          data: {
            type: "Buffer",
            data: Array.from(uint8Array), // Convert Uint8Array to regular array
          },
          contentType: file.type,
          originalName: file.name, // Store the original filename
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };
  /******* */
  const clearForm = () => {
    settitle("");
    setdescription("");
    setImageData(null);
  };

  //** */
  const update = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append(
      "image",
      new Blob([new Uint8Array(imageData.data.data)], {
        type: imageData.contentType,
      }),
      imageData.originalName
    );

    dispatch(updateActualites(el._id, formData));
    console.log("this is the formdata:");
    console.log(formData);
    clearForm();
    alert("actualite mise a jour");
  };
  //** */

  const toggle = () => {
    console.log(el._id);
    setModal(!modal);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit actualite
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ paddingTop: "90px" }}>
        <ModalHeader toggle={toggle}>edit Actualite</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Image</Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Title</Label>
              <Input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input
                value={description}
                onChange={(e) => setdescription(e.target.value)}
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

export default EditModalActu;
