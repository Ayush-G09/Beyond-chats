import { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { mindMapType } from "../../data/mindMap";
import Divider from "../Divider";
import Label from "../Label";
import styled from "styled-components";
import Input from "../Input";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

type Props = {
  onClose: () => void;
  modalType: "Add Data" | "Training" | "Truths" | "Edit Data" | "Delete";
  data: mindMapType;
};

function AddDataModal({ onClose, modalType, data }: Props) {
  const [dataType, setDataType] = useState<
    "Text" | "PDF" | "EPUB" | "Link" | "CSV"
  >("Text");

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Label>{modalType === "Add Data" ? "Add" : "Edit"} Data</Label>
      <Divider />
      {modalType === "Add Data" && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <StyledTab
            same={dataType === "Text"}
            onClick={() => setDataType("Text")}
          >
            Text
          </StyledTab>
          <StyledTab
            same={dataType === "PDF"}
            onClick={() => setDataType("PDF")}
          >
            PDF
          </StyledTab>
          <StyledTab
            same={dataType === "EPUB"}
            onClick={() => setDataType("EPUB")}
          >
            EPUB
          </StyledTab>
          <StyledTab
            same={dataType === "Link"}
            onClick={() => setDataType("Link")}
          >
            Link
          </StyledTab>
          <StyledTab
            same={dataType === "CSV"}
            onClick={() => setDataType("CSV")}
          >
            CSV
          </StyledTab>
        </div>
      )}
      {dataType === "Text" && modalType !== "Edit Data" && (
        <Input placeholder="Title" sx={{ marginTop: "1rem" }} />
      )}
      {dataType === "Text" && (
        <textarea
          rows={5}
          value={modalType === "Edit Data" ? data.data : ""}
          placeholder="Description"
          style={{
            outline: "none",
            resize: "none",
            border: "none",
            borderRadius: "5px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
            fontSize: "1.1rem",
            padding: "0rem 0.5rem",
            backgroundColor: theme === "dark" ? "#121212" : "#F7F8F9",
            color: theme === "dark" ? "white" : "black",
            width: "80%",
            paddingTop: "1rem",
          }}
        />
      )}
      {dataType === "PDF" || dataType === "EPUB" || dataType === "CSV" ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "2rem 0rem",
            flexDirection: "column",
          }}
        >
          <Button type="primary" sx={{ display: "flex" }}>
            <div>Upload {dataType === "EPUB" ? "EPUB" : "PDF"}</div>
            <FontAwesomeIcon icon={faUpload} />
          </Button>
          {dataType === "CSV" && (
            <>
              <Label sub sx={{ fontSize: "0.8rem", marginTop: "1.5rem" }}>
                Please upload your CSV file in the following format: Download
                CSV.
              </Label>
              <Label sub sx={{ fontSize: "0.8rem" }}>
                Make sure the header is present
              </Label>
            </>
          )}
        </div>
      ) : null}
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Input
          placeholder="Read more/Source link"
          value={modalType === "Edit Data" ? data.source : ""}
        />
        <Label sub sx={{ fontSize: "0.7rem", marginTop: "0.4rem" }}>
          The Source or Read More link user gets at the end of the message
        </Label>
      </div>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={onClose}
          type="outline"
          sx={{ marginRight: "1rem", border: "1px solid red", color: "red" }}
        >
          Cancel
        </Button>
        <Button type="primary" sx={{ marginRight: "5%" }}>
          Save
        </Button>
      </div>
    </div>
  );
}

const StyledTab = styled.div<{ same: boolean }>`
  padding: 0.4rem 1rem;
  border: 1px solid #0096ff;
  color: ${(p) => (p.same ? p.theme.color.font1 : "#0096FF")};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(p) => (p.same ? "#0096FF" : "transparent")};
  transition: all 0.3s ease-in-out;
`;

export default AddDataModal;
