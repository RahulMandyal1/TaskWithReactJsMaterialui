import React from "react";
import { AppBar, styled, Typography } from "@mui/material";

const Header = styled(AppBar)({
  padding: "2rem 9%",
  background: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "relative",
});

function Navbar() {
  return (
    <Header>
      <Typography variant="h5">
        Total Projects : 10 Total Budget = 90229232
      </Typography>
      ;
    </Header>
  );
}

export default Navbar;
