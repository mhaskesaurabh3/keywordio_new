import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, Select } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

const MediaAd = () => {
  const navigate = useNavigate();
  const [modal2, SetModel2] = useState(false);
  const [dropdown, setDropDown] = useState("");

  const toggleModal2 = () => {
    SetModel2(true);

  };
  if (modal2) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleChange = (event) => {
    setDropDown(event.target.value);
  };
  return (
    <>
      <div className="MediaAd_main">
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdown}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <h4>Description 01</h4>
        <textarea
          name="add primary details"
          cols="70"
          rows="5"
          placeholder="Add primary text to help user understand more about your product, services and offers"
        ></textarea>
        <h4>Landscape Marketing Image(1.9:1)</h4>
        <input type="text" placeholder="enter the name" />
        <h4>Portrait Marketing Image(4:5)</h4>
        <input type="text" placeholder="enter the name" />
        <h4>Square Marketing Image(1:1)</h4>
        <input type="text" placeholder="enter the name" />
      </div>
      <div className="back-submit-mediaad">
        <Stack spacing={2} direction="row">
          <Button onClick={() => navigate(-1)} variant="outlined">
            Back
          </Button>
          <Button onClick={toggleModal2} variant="contained">
            Submit
          </Button>
        </Stack>
      </div>
      {modal2 && (
        <Modal />
      )}
    </>
  );
};

export default MediaAd;
