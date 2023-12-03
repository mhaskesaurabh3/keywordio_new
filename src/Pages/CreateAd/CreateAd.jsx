import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Grid } from "@mui/material";

export default function CreateAd() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setIsChecked2(false);
  };

  const handleCheckboxChange2 = (e) => {
    setIsChecked2(e.target.checked);
    setIsChecked(false);
  };

  const handleSubmit = () => {
    if (isChecked) {
      navigate("/textad"); // Navigate to the "submitted" page
    }
    else if (isChecked2) {
      navigate('/mediaad');
    }

  };

  return (
    <>
      <div className="create-ads">
        <h3>Create Ads</h3>
      </div>
      <div className="card_main">
        <div onClick={() => setIsChecked(!isChecked)} className="card_one">
          <Checkbox
            size="medium"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <h2>Text Ad</h2>
        </div>
        <div onClick={() => setIsChecked2(!isChecked2)} className="card_two">
          <Checkbox
            size="medium"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
          />
          <h2>Media Ad</h2>
        </div>
      </div >
      <div className="submit_button">
        <Button onClick={handleSubmit} variant="contained">
          Next
        </Button>
      </div>
    </>
  );
}
