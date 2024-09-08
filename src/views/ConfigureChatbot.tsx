import {
  faExclamation,
  faLinesLeaning,
  faPlus,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/Button";
import styled from "styled-components";
import Crousel from "../components/Crousel";
import user from "../assets/user.png";
import Label from "../components/Label";
import Input from "../components/Input";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

function ConfigureChatbot() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <StyledConfigure>
      <StyledSettingsCon>
        <div
          style={{
            width: "100%",
            minHeight: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "2rem",
          }}
        >
          <Button
            type="outline"
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginLeft: "3rem",
            }}
          >
            <FontAwesomeIcon icon={faLinesLeaning} />
            <div>Reset to Default</div>
          </Button>
          <Button
            type="primary"
            sx={{
              backgroundColor: theme === "dark" ? "#383838" : "gray",
              color: theme === "dark" ? "gray" : "#383838",
            }}
          >
            <div>Save Changes</div>
          </Button>
        </div>
        <Crousel title="Basic" content="Edit name and logo">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
        <Crousel
          title="Business Actions"
          content="Set Call-To-Actions of your business"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            <Label sx={{ marginTop: "2rem", marginLeft: "5%" }}>
              Business Action
            </Label>
            <Label sub sx={{ marginLeft: "5%" }}>
              Only First 3 will be visible in the dropdown menu in chatbot
            </Label>
            <Button
              type="outline"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "20%",
                justifyContent: "center",
                marginLeft: "5%",
                marginTop: "2rem",
              }}
            >
              <div>Add action</div>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </Crousel>
        <Crousel
          title="Wellcome Message"
          content="The first message a user sees"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <StyledMessageBox style={{ marginTop: "1rem" }}>
              <Label sx={{ marginLeft: "1rem" }}>
                1. Hi there! Welcome to BeyondChats
              </Label>
              <Button
                type="outline"
                sx={{
                  marginLeft: "auto",
                  marginRight: "1rem",
                  color: "red",
                  border: "1px solid red",
                }}
              >
                Delete
              </Button>
            </StyledMessageBox>
            <StyledMessageBox>
              <Label sx={{ marginLeft: "1rem" }}>
                2. What brings you here today?
              </Label>
              <Button
                type="outline"
                sx={{
                  marginLeft: "auto",
                  marginRight: "1rem",
                  color: "red",
                  border: "1px solid red",
                }}
              >
                Delete
              </Button>
            </StyledMessageBox>
            <StyledMessageBox>
              <Label sx={{ marginLeft: "1rem" }}>
                3. Ask me anything about BeyondChats
              </Label>
              <Button
                type="outline"
                sx={{
                  marginLeft: "auto",
                  marginRight: "1rem",
                  color: "red",
                  border: "1px solid red",
                }}
              >
                Delete
              </Button>
            </StyledMessageBox>
            <Button type="outline">Add New Message</Button>
          </div>
        </Crousel>
        <Crousel
          title="Design"
          content="Customize the appearance of the chat bot"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
        <Crousel
          title="Position"
          content="Where the chat bot appear on your website"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
        <Crousel title="Ground Truths" content="Add most asked Q&As">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
        <Crousel
          title="Advance"
          content="Enable user signup & mail notification"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
        <Crousel title="Copy code" content="Setup on your website">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Input sx={{ marginTop: "1rem" }} placeholder="Name" />
            <img src={user} alt="" style={{ width: "5rem" }} />
            <Button
              type="outline"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div>Change profile picture</div>
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </div>
        </Crousel>
      </StyledSettingsCon>
      <StyledPreview>
        <Label>
          Preview not available{" "}
          <FontAwesomeIcon icon={faExclamation} color="#F36544" size="1x" />
        </Label>
      </StyledPreview>
    </StyledConfigure>
  );
}

const StyledPreview = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;

const StyledConfigure = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 92%;
    overflow-y: hidden;
  }
`;

const StyledMessageBox = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid ${(p) => p.theme.color.base3};
  border-radius: 5px;
`;

const StyledSettingsCon = styled.div`
  width: 100%;
  min-height: 100%;
  border-right: none;
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
    border-right: 3px dotted ${(p) => p.theme.color.base7};
  }
`;

export default ConfigureChatbot;
