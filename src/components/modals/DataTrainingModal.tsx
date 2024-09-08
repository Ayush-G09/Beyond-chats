import Button from "../Button";
import styled from "styled-components";
import Divider from "../Divider";
import Label from "../Label";

type Props = {
  onClose: () => void;
};

function DataTrainingModal({ onClose }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Label>Data Training Status</Label>
      <Divider />
      <StyledTable>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "10%",
            alignItems: "center",
          }}
        >
          <StyledHeaderItem>Title</StyledHeaderItem>
          <StyledHeaderItem>Type</StyledHeaderItem>
          <StyledHeaderItem>Status</StyledHeaderItem>
          <StyledHeaderItem>Added On</StyledHeaderItem>
        </div>
        <Divider sx={{ width: "100%" }} />
        <Label
          sx={{
            width: "100%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No Data Added for training
        </Label>
      </StyledTable>
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
          sx={{
            marginRight: "1rem",
            border: "1px solid red",
            color: "red",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

const StyledTable = styled.div`
  width: 95%;
  height: 60vh;
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.color.base4};
  display: flex;
  flex-direction: column;
`;

const StyledHeaderItem = styled.div`
  width: 40%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px dashed #343434;
`;

export default DataTrainingModal;
