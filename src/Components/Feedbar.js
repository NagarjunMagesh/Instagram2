import { Box } from "@mui/material";

import React from "react";
import Posts from "./Posts";

const Feedbar = () => {
  return (
    <Box flex={4} p={2}>
      <Posts />
    </Box>
  );
};

export default Feedbar;
