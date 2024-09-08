import {
  faChevronDown,
  faChevronUp,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { mindMapType } from "../data/mindMap";
import { truncateString } from "../utils";
import styled from "styled-components";
import Label from "./Label";

type Props = {
  data: mindMapType;
  index: number;
  edit: (id: string) => void;
  onDelete: () => void;
};

function MindMapItem({ data, index, onDelete, edit }: Props) {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <StyledMindMapItem expand={expand} index={index}>
      <Label
        sx={{
          width: "55%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {expand ? data.data : truncateString(data.data, 85)}
      </Label>
      <StyledChevronIcon onClick={() => setExpand(!expand)}>
        {data.data.length > 85 && (
          <FontAwesomeIcon icon={expand ? faChevronUp : faChevronDown} />
        )}
      </StyledChevronIcon>
      <Label
        sx={{
          width: "10%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.source}
      </Label>
      <div
        style={{
          width: "10%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Label
          sx={{
            padding: "0.2rem 0.5rem",
            border: "1px solid #0096FF",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.type}
        </Label>
      </div>
      <Label
        sx={{
          width: "10%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.createdAt}
      </Label>
      <div
        style={{
          width: "10%",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          color: "white",
        }}
      >
        <div
          onClick={() => edit(data.id)}
          style={{
            width: "1.6rem",
            height: "1.6rem",
            borderRadius: "50%",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#0096FF",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </div>
        <div
          onClick={onDelete}
          style={{
            width: "1.6rem",
            height: "1.6rem",
            borderRadius: "50%",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
            backgroundColor: "red",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </StyledMindMapItem>
  );
}

const StyledMindMapItem = styled.div<{ index: number; expand: boolean }>`
  width: 100%;
  min-height: 51.5px;
  padding: ${(p) => (p.expand ? "1rem 0rem" : "0rem")};
  display: flex;
  font-weight: 400;
  background-color: ${(p) =>
    p.index % 2 === 0 ? p.theme.color.base5 : p.theme.color.base6};
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const StyledChevronIcon = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(p) => p.theme.color.font1};
`;

export default MindMapItem;
