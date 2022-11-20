import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Header from "../components/Header";
import OriginHair from "./OriginHair";
import DamagedHair from "./DamagedHair";
import { useState } from "react";
import formula from "../formula";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState();
  const [originHair, setOriginHair] = useState();
  const [damagedHair1, setDamagedHair1] = useState();
  const [damagedHair2, setDamagedHair2] = useState();
  const [damagedHair3, setDamagedHair3] = useState();
  const [damagedHair4, setDamagedHair4] = useState();
  const [damagedHair5, setDamagedHair5] = useState();
  const [damagedHair6, setDamagedHair6] = useState();

  const handleOriginHairChange = (e) => {
    setOriginHair(e.target.value);
  };

  const handleDamagedHair1Change = (e) => {
    setDamagedHair1(e.target.value);
  };

  const handleDamagedHair2Change = (e) => {
    setDamagedHair2(e.target.value);
  };

  const handleDamagedHair3Change = (e) => {
    setDamagedHair3(e.target.value);
  };

  const handleDamagedHair4Change = (e) => {
    setDamagedHair4(e.target.value);
  };

  const handleDamagedHair5Change = (e) => {
    setDamagedHair5(e.target.value);
  };

  const handleDamagedHair6Change = (e) => {
    setDamagedHair6(e.target.value);
  };

  const onCickResult = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    let origin: number | undefined;
    let damaged: number | undefined;
    if (originHair === "hair1") {
      origin = 10;
    } else if (originHair === "hair2") {
      origin = 9;
    } else if (originHair === "hair3") {
      origin = 8;
    } else if (originHair === "hair4") {
      origin = 7;
    }

    if (damagedHair1) {
      if (damaged) {
        damaged += 1;
      } else {
        damaged = damagedHair1 === "Y" ? 1 : 0;
      }
    }
    if (damagedHair2) {
      if (damaged) {
        damaged += 1;
      } else {
        damaged = damagedHair2 === "Y" ? 1 : 0;
      }
    }
    if (damagedHair3) {
      if (damaged) {
        damaged += 2;
      } else {
        damaged = damagedHair3 === "Y" ? 2 : 0;
      }
    }
    if (damagedHair4 === "Y") {
      if (damaged) {
        damaged += 2;
      } else {
        damaged = damagedHair4 === "Y" ? 2 : 0;
      }
    }
    if (damagedHair5 === "Y") {
      if (damaged) {
        damaged += 2;
      } else {
        damaged = damagedHair5 === "Y" ? 2 : 0;
      }
    }
    if (damagedHair6 === "Y") {
      if (damaged) {
        damaged += 2;
      } else {
        damaged = damagedHair6 === "Y" ? 2 : 0;
      }
    }


    if (origin && damaged !== undefined) {
      setResult(formula[origin.toString()][damaged.toString()]);
    }
  }, [
    originHair,
    damagedHair1,
    damagedHair2,
    damagedHair3,
    damagedHair4,
    damagedHair5,
    damagedHair6,
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ padding: 0 }}>
        <Header></Header>
        <Divider
          sx={{ borderWidth: "medium", borderColor: "#eeeeee" }}
        ></Divider>
        <Box sx={{ height: "100vh" }}>
          <OriginHair handleChange={handleOriginHairChange}></OriginHair>
          <Divider
            sx={{ borderWidth: "thin", borderColor: "#eeeeee" }}
          ></Divider>
          <DamagedHair
            handleHair1Change={handleDamagedHair1Change}
            handleHair2Change={handleDamagedHair2Change}
            handleHair3Change={handleDamagedHair3Change}
            handleHair4Change={handleDamagedHair4Change}
            handleHair5Change={handleDamagedHair5Change}
            handleHair6Change={handleDamagedHair6Change}
          ></DamagedHair>
          <Divider
            sx={{ borderWidth: "medium", borderColor: "#eeeeee" }}
          ></Divider>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "10px" }}
          >
            <Button variant="contained" color="primary" onClick={onCickResult}>
              결과보기
            </Button>
          </Stack>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>결과</DialogTitle>
          <Box sx={{ margin: "20px" }}>
            {result
              ? result === "단독"
                ? `001 단독으로 해주세요.`
                : `001과 펌제 비율을 ${result} 으로 해주세요.`
              : `항목을 선택해주세요.`}
          </Box>
        </Dialog>
      </Container>
    </React.Fragment>
  );
}
