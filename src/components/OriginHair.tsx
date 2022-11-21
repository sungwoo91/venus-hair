import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import hairs from "../images/hairs.jpeg";

const hairImageStyles = {
  maxWidth: "100%",
  margin: "10px 20px",
};

const formLabelStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "10px",
  marginTop: "10px",
  color: "black",
};

const radioGroupStyles = {
  justifyContent: "space-around",
  marginLeft: "20px",
};

export default function OriginHair({ handleChange }: any) {
  return (
    <Box>
      <FormControl>
        <FormLabel
          id="origin-hair-radio-buttons-group-label"
          sx={formLabelStyles}
          focused={false}
        >
          버진모 진단
        </FormLabel>
        <img src={hairs} alt="Gatsby G Logo" style={hairImageStyles} />
        <RadioGroup
          aria-labelledby="origin-hair-radio-buttons-group-label"
          name="origin-hair-radio-buttons-group"
          style={radioGroupStyles}
          onChange={handleChange}
        >
          <FormControlLabel
            value="hair1"
            control={<Radio />}
            label="1. 윤기나는 직모 (10)"
          />
          <FormControlLabel
            value="hair2"
            control={<Radio />}
            label="2. 연모, 약곱슬모 (9)"
          />
          <FormControlLabel
            value="hair3"
            control={<Radio />}
            label="3. 건조모, 강곱슬모, 50%이상 세치모 (8)"
          />
          <FormControlLabel
            value="hair4"
            control={<Radio />}
            label="4. 악성곱슬모 (7)"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
