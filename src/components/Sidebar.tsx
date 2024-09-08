import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faGear,
  faUsers,
  faMessage,
  faAddressCard,
  faSquarePollHorizontal,
  faChevronLeft,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import Label from "./Label";

type State = {
  expand: boolean;
  label: boolean;
};

function Sidebar() {
  const [state, setState] = useState<State>({
    expand: false,
    label: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    let timer: any;
    if (state.expand) {
      timer = setTimeout(() => {
        setState((prev) => ({ ...prev, label: true }));
      }, 400);
    } else {
      setState((prev) => ({ ...prev, label: false }));
    }

    return () => clearTimeout(timer);
  }, [state.expand]);

  return (
    <StyledSidebar expand={state.expand}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: state.expand ? "start" : "center",
          gap: "0.5rem",
        }}
      >
        <img
          src={logo}
          style={{
            width: "2rem",
            height: "2rem",
            marginTop: "0.7rem",
            marginBottom: "1.5rem",
            marginLeft: state.expand ? "20px" : "0px",
          }}
        />
        {state.expand && state.label && (
          <Label sub sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
            Mind Map
          </Label>
        )}
      </div>
      <div
        onClick={() => setState((prev) => ({ ...prev, expand: !state.expand }))}
        style={{
          width: "1.3rem",
          height: "1.3rem",
          cursor: "pointer",
          backgroundColor: "#0096FF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "absolute",
          right: state.expand ? "-6%" : "-20%",
          top: "6%",
        }}
      >
        <FontAwesomeIcon
          icon={state.expand ? faChevronLeft : faChevronRight}
          style={{ width: "8px" }}
        />
      </div>
      <StyledNavItem
        expand={state.expand}
        selected={location.pathname.includes("/chat")}
        onClick={() => navigate("/chat")}
      >
        <FontAwesomeIcon icon={faMessage} style={{ width: "20px" }} />
        {state.expand && state.label && (
          <Label sub sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
            Explore Chats
          </Label>
        )}
      </StyledNavItem>
      <StyledNavItem
        expand={state.expand}
        selected={location.pathname === "/leads"}
        onClick={() => navigate("/leads")}
      >
        <FontAwesomeIcon icon={faAddressCard} style={{ width: "20px" }} />
        {state.expand && state.label && (
          <Label sub sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
            Business Leads
          </Label>
        )}
      </StyledNavItem>
      <StyledNavItem
        expand={state.expand}
        selected={location.pathname === "/mind-map"}
        onClick={() => navigate("/mind-map")}
      >
        <FontAwesomeIcon
          icon={faSquarePollHorizontal}
          style={{ width: "20px" }}
        />
        {state.expand && state.label && (
          <Label sub sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
            View Mind Map
          </Label>
        )}
      </StyledNavItem>
      <StyledNavItem
        expand={state.expand}
        selected={location.pathname === "/team"}
        onClick={() => navigate("/team")}
      >
        <FontAwesomeIcon icon={faUsers} style={{ width: "20px" }} />
        {state.expand && state.label && (
          <Label sub sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
            Manage Team
          </Label>
        )}
      </StyledNavItem>
      <StyledNavItem
        expand={state.expand}
        selected={location.pathname === "/config"}
        onClick={() => navigate("/config")}
      >
        <FontAwesomeIcon icon={faGear} style={{ width: "20px" }} />
        {state.expand && state.label && (
          <Label sub sx={{ fontWeight: "500", fontSize: "0.9rem" }}>
            Configure Chatbot
          </Label>
        )}
      </StyledNavItem>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: state.expand ? "start" : "center",
          marginTop: "auto",
          marginBottom: "1rem",
          paddingLeft: state.expand ? "30px" : "0px",
        }}
      >
        <StyledModeSelector onClick={toggleTheme}>
          <FontAwesomeIcon
            icon={theme === "light" ? faSun : faMoon}
            style={{
              color: theme === "light" ? "orange" : "black",
              fontSize: "1.2rem",
            }}
          />
        </StyledModeSelector>
      </div>
    </StyledSidebar>
  );
}

const StyledModeSelector = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: ${(p) => p.theme.color.font1};
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSidebar = styled.div<{ expand: boolean }>`
  width: ${(p) => (p.expand ? "250px" : "55px")};
  height: 100%;
  background-color: ${(p) => p.theme.color.base7};
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledNavItem = styled.div<{ expand: boolean; selected: boolean }>`
  width: ${(p) => (p.expand ? "185px" : "40px")};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.expand ? "start" : "center")};
  cursor: pointer;
  color: ${(p) => (p.selected ? "#0096FF" : "gray")};
  border-radius: 5px;
  gap: 1rem;
  padding-left: ${(p) => (p.expand ? "10px" : "0px")};
  background-color: ${(p) => (p.selected ? "#0096FF1A" : "transparent")};
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #0096ff;
    background-color: #0096ff1a;
  }
`;

export default Sidebar;
