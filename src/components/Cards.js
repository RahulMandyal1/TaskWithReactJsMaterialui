import React from "react";
import Card from "./Card";
import { useState } from "react";
import { Box, Input, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { updateCard } from "../redux/cardAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Cards() {
  let data = useSelector((state) => state.projects);
  let dispatch = useDispatch();

  const [state, setState] = useState({
    modalOpened: false,
    cardToBeEdited: null,
  });

  let [cardData, setCardData] = useState({
    name: "",
    budget: "",
    id: null,
  });

  // open the modal
  const handleOpen = ({ target }) => {
    setState({
      ...state,
      modalOpened: true,
      cardToBeEdited: target.id,
    });
  };

  //close  the modal
  const handleClose = () => {
    setState({
      ...state,
      modalOpened: false,
    });
  };

  const handleChange = ({ target }) => {
    setCardData({
      ...cardData,
      [target.name]: target.value,
    });
  };

  const handleUpdate = () => {
    console.log("this method is getting called");
    dispatch(updateCard({ ...cardData, id: state.cardToBeEdited }));
    handleChange();
  };

  return (
    <div className="cards-container">
      {data.map((project) => {
        return (
          <Card
            data={project}
            dispatch={dispatch}
            handleUpdate={handleOpen}
            key={data.id}
          />
        );
      })}
      <Modal
        open={state.modalOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Simple React Modal</h2>
          <Input
            type="text"
            placeholder="enter project name"
            name="name"
            value={cardData.projectName}
            onChange={handleChange}
          ></Input>
          <Input
            type="number"
            placeholder="enter project budget"
            name="budget"
            value={cardData.projectBudget}
            onChange={handleChange}
          ></Input>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            accumsan odio enim, non pharetra est ultrices et.
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default Cards;
