import styled from "styled-components";
import { UserType } from "../data/chats";
import { truncateString } from "../utils";
import Label from "./Label";

type Props = {
  chat: UserType;
  selected: boolean;
  onClick: (id: string) => void;
};

function Chat({ chat, selected, onClick }: Props) {
  return (
    <StyledChat selected={selected} onClick={() => onClick(chat.id)}>
      <img src={chat.userImage} style={{ width: "50px", marginLeft: "1rem" }} />
      <div
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          marginLeft: "0.7rem",
          gap: "0.5rem",
        }}
      >
        <Label sx={{ fontWeight: "700" }}>{chat.userName}</Label>
        <Label sub sx={{ fontSize: "0.8rem", fontWeight: "500" }}>
          {truncateString(chat.messages[chat.messages.length - 1].content, 30)}
        </Label>
      </div>
      <Label
        sub
        sx={{
          marginLeft: "auto",
          marginRight: "1rem",
          fontSize: "0.7rem",
          height: "60%",
          display: "flex",
          alignItems: "end",
        }}
      >
        {chat.messages[chat.messages.length - 1].time}
      </Label>
    </StyledChat>
  );
}

const StyledChat = styled.div<{ selected: boolean }>`
  width: 95%;
  min-height: 80px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(p) =>
    p.selected ? p.theme.color.base1 : p.theme.color.base2};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export default Chat;
