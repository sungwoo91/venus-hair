import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

const formControlStyles = {
  width: "100%",
};

const titleStyles = {
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "10px",
  marginTop: "10px",
  color: "black",
};

const itemStyles = {
  display: "flex",
  marginTop: "5px",
  marginLeft: "20px",
};

const formLabelStyles = {
  alignSelf: "center",
  width: "150px",
  marginRight: "10px",
};

export default function DamagedHair({
  handleHair1Change,
  handleHair2Change,
  handleHair3Change,
  handleHair4Change,
  handleHair5Change,
  handleHair6Change,
}: any) {
  return (
    <Box>
      <FormControl style={formControlStyles}>
        <Typography style={titleStyles}>손상모 진단</Typography>

        <Box style={itemStyles}>
          <FormLabel id="radio-group1-label" style={formLabelStyles} focused={false}>
            염색 유무
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group1-label"
            row
            name="radio-group1"
            onChange={handleHair1Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>

        <Box style={itemStyles}>
          <FormLabel id="radio-group2-label" style={formLabelStyles} focused={false}>
            일반펌 유무
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group2-label"
            row
            name="radio-group2"
            onChange={handleHair2Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>

        <Box style={itemStyles}>
          <FormLabel id="radio-group3-label" style={formLabelStyles} focused={false}>
            주기적 염색
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group3-label"
            row
            name="radio-group3"
            onChange={handleHair3Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>

        <Box style={itemStyles}>
          <FormLabel id="radio-group4-label" style={formLabelStyles} focused={false}>
            직펌 유무
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group4-label"
            row
            name="radio-group4"
            onChange={handleHair4Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>

        <Box style={itemStyles}>
          <FormLabel id="radio-group5-label" style={formLabelStyles} focused={false}> 
            열펌 유무
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group5-label"
            row
            name="radio-group5"
            onChange={handleHair5Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>

        <Box style={itemStyles}>
          <FormLabel id="radio-group6-label" style={formLabelStyles} focused={false}>
            홈매직 스타일링
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-group6-label"
            row
            name="radio-group6"
            onChange={handleHair6Change}
          >
            <FormControlLabel value="Y" control={<Radio />} label="예" />
            <FormControlLabel value="N" control={<Radio />} label="아니오" />
          </RadioGroup>
        </Box>
      </FormControl>
    </Box>
  );
}
