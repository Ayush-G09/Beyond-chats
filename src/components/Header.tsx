import { useMemo } from "react";
import user from "../assets/user.png";
import styled from "styled-components";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import Label from "./Label";

function Header() {
  const location = useLocation();

  const heading = useMemo(() => {
    switch (location.pathname) {
      case "/leads":
        return "Leads for you";
      case "/mind-map":
        return "Chatbot Mind Map";
      case "/team":
        return "Manage your Team";
      case "/config":
        return "Personalize the chatbot";
      default:
        return "User Chats";
    }
  }, [location.pathname]);

  const subHeading = useMemo(() => {
    switch (location.pathname) {
      case "/leads":
        return "Data of users who have shown interest in your products/services and have shared their contact details";
      case "/mind-map":
        return "This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here";
      case "/team":
        return "View team, Add new members, remove members, etc";
      case "/config":
        return "Customize the look & feel of the chatbot: colors, personality, chatbot name, logo, business actions, and much more!";
      default:
        return "Conversations of your website visitors are shown here";
    }
  }, [location.pathname]);

  return (
    <StyledHeader>
      <div
        style={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "1.2rem",
          flexDirection: "column",
        }}
      >
        <Label sx={{ fontSize: "1rem", fontWeight: "600" }}>{heading}</Label>
        <SubHeadingWrapper>
          <Label sub sx={{ fontSize: "0.8rem", fontWeight: "400" }}>
            {subHeading}
          </Label>
        </SubHeadingWrapper>
      </div>
      <div
        style={{
          marginLeft: "auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          paddingRight: "1rem",
          gap: "1.2rem",
        }}
      >
        <GuideButtonWrapper>
          <Button type="outline">Guided Tour</Button>
        </GuideButtonWrapper>
        <StyledSelect name="orgs" id="orgs">
          <option value="Tata">Tata</option>
          <option value="ICICI">ICICI</option>
          <option value="SBI">SBI</option>
          <option value="Mahindra">Mahindra</option>
        </StyledSelect>
        <img
          src={user}
          style={{ width: "35px", borderRadius: "50%", cursor: "pointer" }}
        />
      </div>
    </StyledHeader>
  );
}

const GuideButtonWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const SubHeadingWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  min-height: 8%;
  background-color: ${(p) => p.theme.color.base3};
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled.select`
  min-width: 100px;
  height: 60%;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  background-color: transparent;
  color: ${(p) => p.theme.color.font1};

  option {
    background-color: ${(p) => p.theme.color.base7};
  }
`;

export default Header;
