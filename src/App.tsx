import { ChakraProvider, Grid } from "@chakra-ui/react";
import { Router, RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./Routes";
import { SideBar } from "./components/SIdeBar";
import { theme } from "./styles/Global";
import { Loguin } from "./pages/Loguin";
import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [auth, setAuth] = useState<boolean>(false);

  function setAuthState() {
    setAuth((state) => true);
  }

  if (auth == true) {
    return (
      <ChakraProvider theme={theme}>
        <Grid templateColumns="15% 85%">
          <SideBar />
          <RouterProvider router={router} />
        </Grid>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider theme={theme}>
        <Loguin setAuthState={setAuthState} />
      </ChakraProvider>
    );
  }
}

export default App;
