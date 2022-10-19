import { Flex, Grid } from "@chakra-ui/react";
import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SIdeBar";
import { Dashboard } from "../pages/Dashboard";
import { Loguin } from "../pages/Loguin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "clientes",
    element: (
      <>
        <Header />
        <div>Clientes</div>
      </>
    ),
  },
  {
    path: "pets",
    element: (
      <>
        <Header />
        <div>Pets</div>
      </>
    ),
  },
  {
    path: "medicos",
    element: (
      <>
        <Header />
        <div>Mpedicos</div>
      </>
    ),
  },
]);
