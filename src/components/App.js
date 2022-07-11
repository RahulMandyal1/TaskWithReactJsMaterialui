import React from "react";
import { Box } from "@mui/system";
import Cards from "./Cards";
import Navbar from "./Navbar";
import {Provider} from "react-redux";
import  store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Box>Here comes the chart</Box>
      <Box>
        <Cards />
      </Box>
    </Provider>
  );
}

export default App;
