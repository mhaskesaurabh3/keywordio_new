import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import { Select } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

const TextAd = () => {
  const navigate = useNavigate();
  const [modal, SetModel] = useState(false);
  const toggleModal = () => {
    SetModel(true)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div className="TextAd_main">
        <br /> <br />
        <br />
        <h4>Heading 01</h4>
        <input
          type="text"
          placeholder="Add a heading that would make users interested"
        />
        <h4>Heading 02</h4>
        <input
          type="text"
          placeholder="Add a heading that would make users interested"
        />
        <h4>Business Name</h4>
        <input type="text" placeholder="Add your business name" />
        <h4>Website URL</h4>
        <input
          type="text"
          placeholder="Add the url of the landing page you want to redirect users to"
        />
        <h4>Description 01</h4>
        <textarea
          name="add primary details"
          cols="70"
          rows="5"
          placeholder="Add primary text to help user understand more about your product, services and offers"
        ></textarea>
        <h4>Button Label</h4>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        ></Select>
      </div>
      <div className="back-submit-textad">
        <Stack spacing={2} direction="row">
          <Button onClick={() => navigate(-1)} variant="outlined">
            Back
          </Button>
          <Button onClick={toggleModal} variant="contained">Submit</Button>
        </Stack>
      </div>

      {modal && (
        <Modal />
      )}
    </>
  );
};

export default TextAd;
