import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Label from "./Label";
import Divider from "./Divider";

type Props = {
  children: React.ReactNode;
  title: string;
  content: string;
};

function Crousel({ children, title, content }: Props) {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <StyledCrousel>
      <div
        style={{
          width: "100%",
          minHeight: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Label
          sx={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          {title}
        </Label>
        <Label
          sub
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "1rem",
          }}
        >
          {content}
        </Label>
        <ChevronIcon onClick={() => setExpand(!expand)}>
          <FontAwesomeIcon icon={expand ? faChevronUp : faChevronDown} />
        </ChevronIcon>
      </div>
      {expand && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Divider />
          {children}
        </div>
      )}
    </StyledCrousel>
  );
}

const ChevronIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(p) => p.theme.color.font1};
`;

const StyledCrousel = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  border: 2px solid ${(p) => p.theme.color.base3};
  margin-bottom: 0.5rem;
  border-radius: 5px;
  flex-direction: column;
`;

export default Crousel;
