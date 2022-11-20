import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const appBarStyles = {
  backgroundColor: 'white',
  color: 'black',
  boxShadow: 'none'
}

export default function Header() {
  return (
    <AppBar position="static" style={appBarStyles}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h4">이지후 비너스</Typography>
      </Toolbar>
    </AppBar>
  );
}
