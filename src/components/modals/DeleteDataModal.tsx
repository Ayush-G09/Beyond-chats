import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import Divider from "../Divider";
import Label from "../Label";

type Props = {
  onClose: () => void;
};

function DeleteDataModal({ onClose }: Props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <FontAwesomeIcon icon={faCircleExclamation} size="5x" color="#F36544" />
      <Label sx={{ marginTop: "1rem", fontSize: "1.2rem", fontWeight: 700 }}>
        Confirmation
      </Label>
      <Label sub sx={{ fontSize: "1rem" }}>
        Are you sure you want to delete this data?
      </Label>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginTop: "1rem",
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
        <Button type="primary" sx={{ marginRight: "5%" }}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DeleteDataModal;
