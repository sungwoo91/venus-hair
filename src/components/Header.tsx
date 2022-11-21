import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const appBarStyles = {
  marginTop: "10px",
  marginBottom: "10px",
  backgroundColor: "white",
  color: "black",
  boxShadow: "none",
};

export default function Header() {
  return (
    <AppBar position="static" style={appBarStyles}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          이지후 모발형태복원열펌 모발진단&처방 1차배합자동계산기
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
