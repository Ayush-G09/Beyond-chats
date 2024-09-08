import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <StyledLayout>
      <Sidebar />
      <div
        style={{
          width: "-webkit-fill-available",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Outlet />
        <Navbar />
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(p) => p.theme.color.base1};
  transition: all ease-in-out 0.5s;
`;

export default Layout;
