import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/user";

import { Button, ModalFooter } from "reactstrap";
import EditModalUser from "./EditModalUser";

const UsersCard = (el) => {
  const dispatch = useDispatch();

  const deleteuser = () => {
    dispatch(deleteUser(el._id));
  };
  console.log(el);
  return (
    <div>
      <p>{el.username}</p>
      <ModalFooter>
        <Button color="secondary" onClick={deleteuser}>
          delete
        </Button>

        <EditModalUser el={el} />
      </ModalFooter>
    </div>
  );
};

export default UsersCard;
