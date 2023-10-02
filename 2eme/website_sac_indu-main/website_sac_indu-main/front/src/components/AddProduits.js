import React, { useState } from "react";
import { addProducts } from "../redux/actions/products";
import { useDispatch } from "react-redux";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>;
const AddProduits = () => {
  const [imageData, setImageData] = useState({
    data: {
      type: "Buffer",
      data: [],
    },
    contentType: "image/jpeg", // Replace with the actual image type
  });

  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  // const added_product = { image, title, description };
  //************/
  const clearForm = () => {
    settitle("");
    setdescription("");
    setImageData(null);
  };
  /******* */
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

  /************** */

  const add = (e) => {
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

    dispatch(addProducts(formData));
    clearForm();
    alert("produits ajouter");
  };

  return (
    <div>
      <AdminNav />
      <h1>Ajouter des produits</h1>
      <div style={{ display: "flex" }}>
        <SideBar style={{ width: "10%", borderStyle: "solid" }} />

        <div style={{ width: "90%" }}>
          <form>
            <div class="form-group">
              <label for="validationCustom01">Products</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Products"
                onChange={(e) => settitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div class="form-group">
              <label for="validationCustom01">Description</label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Products description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="mb-3">
              <input
                class="form-control"
                type="file"
                id="formFile"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <button type="button" onClick={add} class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduits;
