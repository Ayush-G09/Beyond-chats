import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Divider from "../Divider";
import Label from "../Label";

function GroundTruthModal() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Label>Ground Truths</Label>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          type="outline"
          sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
        >
          <Label>Add Ground Truth</Label>
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </div>
      <Label
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        No Ground Truths Added
      </Label>
    </div>
  );
}

export default GroundTruthModal;
