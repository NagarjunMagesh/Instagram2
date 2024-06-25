import { Box, Stack } from "@mui/material";
import Feedbar from "./Components/Feedbar";
import Right from "./Components/Right";
import Sidebar from "./Components/Sidebar";
import Reals from "./Components/Reals";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./Components/Navbar1";

/*import "../node_modules/bootstrap/dist/css/bootstrap.min.css";*/

function App() {
  return (
    <>
      <Box>
        <Navbar1 />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feedbar />
          <Right />
        </Stack>
        <Reals />
      </Box>
    </>
  );
}

export default App;
