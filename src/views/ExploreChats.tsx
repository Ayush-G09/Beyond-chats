import { faArrowLeft, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { chats } from "../data/chats";
import Chat from "../components/Chat";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Label from "../components/Label";
import useWindowWidth from "../hooks/useWindowWidth";

type State = {
  tab: "Chats" | "Remarks";
  subTab: "Unresolved" | "Resolved";
  msg: {
    from: "user" | "ai";
    content: string;
    time: string;
  }[];
};

function ExploreChats() {
  const [state, setState] = useState<State>({
    tab: "Chats",
    subTab: "Unresolved",
    msg: [],
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const windowWidth = useWindowWidth();

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPath = location.pathname;

    if (!currentPath.endsWith("/chat") && chats.length) {
      const message = chats.find((chat) => chat.id === id)?.messages;
      setState((prev) => ({ ...prev, msg: message! }));
    }
  }, [location, navigate]);

  const ChatClick = (id: string) => {
    navigate(`/chat/${id}`, { replace: true });
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.msg]);

  return (
    <StyledExploreChats>
      <StyledChatList
        style={{
          width: windowWidth < 768 ? "100%" : "30%",
          display:
            windowWidth < 768 && location.pathname !== "/chat"
              ? "none"
              : "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "10%",
            display: "flex",
            gap: "0.5rem",
            paddingLeft: "2rem",
            alignItems: "center",
          }}
        >
          <StyledTabs
            onClick={() => setState((prev) => ({ ...prev, tab: "Chats" }))}
            style={{ color: state.tab === "Chats" ? "#0096FF" : "darkgray" }}
          >
            <div>Chats</div>
            <div
              style={{
                width: "0.3rem",
                height: "0.3rem",
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            />
          </StyledTabs>
          <StyledTabs
            onClick={() => setState((prev) => ({ ...prev, tab: "Remarks" }))}
            style={{ color: state.tab === "Remarks" ? "#0096FF" : "darkgray" }}
          >
            <div>Remarks</div>
            <div
              style={{
                width: "0.3rem",
                height: "0.3rem",
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            />
          </StyledTabs>
        </div>
        {state.tab === "Chats" ? (
          <StyledChats>
            {chats.map((chat) => (
              <Chat
                onClick={ChatClick}
                selected={chat.id === id}
                chat={chat}
                key={chat.id}
              />
            ))}
          </StyledChats>
        ) : (
          <StyledRemarksSection>
            <div
              style={{
                width: "100%",
                height: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "1rem",
              }}
            >
              <FontAwesomeIcon
                icon={faArrowTurnUp}
                color="#0096FF"
                style={{ rotate: "90deg" }}
              />
              <StyledSubTab
                onClick={() =>
                  setState((prev) => ({ ...prev, subTab: "Unresolved" }))
                }
                style={{
                  color: state.subTab === "Unresolved" ? "#0096FF" : "darkgray",
                }}
              >
                Unresolved
              </StyledSubTab>
              <StyledSubTab
                onClick={() =>
                  setState((prev) => ({ ...prev, subTab: "Resolved" }))
                }
                style={{
                  marginRight: "1rem",
                  color: state.subTab === "Resolved" ? "#0096FF" : "darkgray",
                }}
              >
                Resolved
              </StyledSubTab>
            </div>
            <Label
              sx={{
                width: "100%",
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: 500,
              }}
            >
              No Messages
            </Label>
          </StyledRemarksSection>
        )}
      </StyledChatList>
      {
        <div
          style={{
            width: windowWidth > 767 ? "70%" : "100%",
            height: "100%",
            display:
              windowWidth < 768 && location.pathname === "/chat"
                ? "none"
                : "flex",
            flexDirection: "column",
          }}
        >
          <BackButton>
            <Label>
              <FontAwesomeIcon
                onClick={() => navigate("/chat")}
                icon={faArrowLeft}
                style={{ marginLeft: "2rem", cursor: "pointer" }}
              />
            </Label>
          </BackButton>
          {!location.pathname.endsWith("/chat") && (
            <StyledChatBox>
              <Label
                sx={{
                  width: "100%",
                  margin: "2rem 0rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >{`Chatting with ${
                chats.find((chat) => chat.id === id)?.userName
              }`}</Label>
              {state.msg.map((msg) => (
                <StyledChatBubble from={msg.from}>
                  {msg.content}
                </StyledChatBubble>
              ))}
              <div
                ref={chatEndRef}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0096FF",
                  margin: "2rem 0rem",
                }}
              >
                Chat ended by user
              </div>
            </StyledChatBox>
          )}
        </div>
      }
    </StyledExploreChats>
  );
}

const BackButton = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledExploreChats = styled.div`
  width: 100%;
  height: 84%;
  display: flex;

  @media (min-width: 768px) {
    height: 92%;
  }
`;

const StyledRemarksSection = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.color.base1};
`;

const StyledChatBubble = styled.div<{ from: "user" | "ai" }>`
  width: fit-content;
  max-width: 60%;
  margin-left: ${(p) => (p.from === "user" ? "0rem" : "auto")};
  padding: 0.5rem;
  color: ${(p) => p.theme.color.font1};
  background-color: ${(p) =>
    p.from === "user" ? "#0096FF" : p.theme.color.base2};
  border-radius: 15px;
`;

const StyledChatList = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${(p) => p.theme.color.base6};
  display: flex;
  flex-direction: column;
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: "center";
  gap: 0.3rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  padding: 0.4rem 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #0096ff1a;
  }
`;

const StyledSubTab = styled.div`
  width: 25%;
  padding: 0.4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0096ff1a;
  }
`;

const StyledChats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledChatBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 1rem;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default ExploreChats;
