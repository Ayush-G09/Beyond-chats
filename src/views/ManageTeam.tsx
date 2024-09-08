import background from "../assets/back.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { chats } from "../data/chats";
import styled from "styled-components";
import user from "../assets/user.png";
import { StyledSelect } from "../components/Header";
import Button from "../components/Button";
import Label from "../components/Label";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Input from "../components/Input";

function ManageTeam() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <StyledManageTeam>
      <StyledUserList>
        <Label
          sx={{ margin: "2rem 0rem", fontSize: "1.2rem", fontWeight: 700 }}
        >
          Members
        </Label>
        {chats.map((data) => (
          <StyledUserCard key={data.id}>
            <div
              style={{
                width: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginRight: "1rem",
              }}
            >
              <img
                src={background}
                style={{ width: "80px", height: "80px", position: "absolute" }}
                alt=""
              />
              <img
                src={data.userImage}
                style={{
                  width: "60px",
                  position: "absolute",
                  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 1)",
                  borderRadius: "50%",
                }}
                alt=""
              />
            </div>
            <div
              style={{
                width: "auto",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "end" }}>
                <Label>{data.userName}</Label>
                <Label
                  sx={{
                    padding: "0.2rem 0.7rem",
                    border: "2px solid #0096FF",
                    borderRadius: "15px",
                    fontSize: "0.6rem",
                  }}
                >
                  Editor
                </Label>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "end" }}>
                <Label sub>{data.email}</Label>
              </div>
            </div>
            <div
              style={{
                marginLeft: "auto",
                cursor: "pointer",
                height: "100%",
                padding: "0rem 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faTrash} color="red" />
            </div>
          </StyledUserCard>
        ))}
      </StyledUserList>
      <StyledAddUser>
        <AddUserCard>
          <div
            style={{
              width: "100%",
              height: "40%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={background}
              alt=""
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
            <img
              src={user}
              alt=""
              style={{
                borderRadius: "50%",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 1)",
                height: "10rem",
                width: "10rem",
                position: "absolute",
              }}
            />
          </div>
          <Input
            sx={{ marginTop: "2rem", marginLeft: "5%" }}
            placeholder="Name"
          />
          <Input sx={{ marginLeft: "5%" }} placeholder="Email" />
          <div style={{ width: "60%", height: "50px", marginLeft: "5%" }}>
            <StyledSelect
              name="role"
              id="role"
              style={{
                backgroundColor: theme === "light" ? "#F7F8F9" : "#121212",
                height: "100%",
                width: "100%",
                borderRadius: "5px",
                padding: "0rem 0.3rem",
                color: theme === "light" ? "black" : "white",
                boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </StyledSelect>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              marginTop: "3rem",
            }}
          >
            <Button type="primary" sx={{ marginRight: "11%" }}>
              Save
            </Button>
          </div>
        </AddUserCard>
      </StyledAddUser>
    </StyledManageTeam>
  );
}

const StyledManageTeam = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (min-width: 768px) {
    height: 92%;
    flex-direction: row;
    overflow-y: none;
  }
`;

const AddUserCard = styled.div`
  width: 70%;
  height: 90%;
  gap: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
  background-color: ${(p) => p.theme.color.base7};
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const StyledUserCard = styled.div`
  width: 70%;
  margin-bottom: 1rem;
  min-height: 80px;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(p) => p.theme.color.base7};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const StyledUserList = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const StyledAddUser = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export default ManageTeam;
