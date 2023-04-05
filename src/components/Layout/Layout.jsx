import { Body } from "./Layout.styled";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Body>
      <AppBar />
      <Outlet />
    </Body>
  );
};

export default Layout;
