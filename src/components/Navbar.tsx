import {
  faAddressCard,
  faGear,
  faMessage,
  faSquarePollHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <NavItem
        selected={location.pathname.includes("/chat")}
        onClick={() => navigate("/chat")}
      >
        <FontAwesomeIcon icon={faMessage} />
      </NavItem>
      <NavItem
        selected={location.pathname === "/leads"}
        onClick={() => navigate("/leads")}
      >
        <FontAwesomeIcon icon={faAddressCard} />
      </NavItem>
      <NavItem
        selected={location.pathname === "/mind-map"}
        onClick={() => navigate("/mind-map")}
      >
        <FontAwesomeIcon icon={faSquarePollHorizontal} />
      </NavItem>
      <NavItem
        selected={location.pathname === "/team"}
        onClick={() => navigate("/team")}
      >
        <FontAwesomeIcon icon={faUsers} />
      </NavItem>
      <NavItem
        selected={location.pathname === "/config"}
        onClick={() => navigate("/config")}
      >
        <FontAwesomeIcon icon={faGear} />
      </NavItem>
    </StyledNavbar>
  );
}

const NavItem = styled.div<{ selected: boolean }>`
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  color: ${(p) => (p.selected ? "#0096FF" : "gray")};
  background-color: ${(p) => (p.selected ? "#0096FF1A" : "transparent")};
  &:hover {
    color: #0096ff;
    background-color: #0096ff1a;
  }
`;

const StyledNavbar = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${(p) => p.theme.color.base7};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Navbar;
