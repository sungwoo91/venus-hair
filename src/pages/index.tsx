// Step 1: Import React
import { CssBaseline } from "@mui/material";
import * as React from "react";
import Calculator from "../components/calculator";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Calculator/>
    </React.Fragment>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>이지후 비너스 계산기</title>;

// Step 3: Export your component
export default IndexPage;
