import { useEffect, useState } from "react";
import styled from "styled-components";
import { chats, UserType } from "../data/chats";
import { getArrayChunk } from "../utils";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

type State = {
  leads: UserType[];
  page: number;
  totalPage: number;
};

function BusinessLeads() {
  const [state, setState] = useState<State>({
    leads: [],
    page: 1,
    totalPage: 0,
  });

  const navigate = useNavigate();

  const toChat = (id: string) => {
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      totalPage: Math.ceil(chats.length / 10),
      leads: getArrayChunk(chats, state.page) as UserType[],
    }));
  }, []);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      leads: getArrayChunk(chats, state.page) as UserType[],
    }));
  }, [state.page]);

  const setPage = (no: number) => {
    setState((prev) => ({ ...prev, page: no }));
  };

  return (
    <StyledBusinessLeads>
      <StyledLeadTable>
        <StyledTableHeader>
          <StyledHeaderItem style={{ width: "18%" }}>Name</StyledHeaderItem>
          <StyledHeaderItem style={{ width: "20%" }}>Email</StyledHeaderItem>
          <StyledHeaderItem style={{ width: "15%" }}>Phone</StyledHeaderItem>
          <StyledHeaderItem style={{ width: "17%" }}>Location</StyledHeaderItem>
          <StyledHeaderItem style={{ width: "10%" }}>
            Confidence
          </StyledHeaderItem>
          <StyledHeaderItem
            style={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Created At
          </StyledHeaderItem>
          <StyledHeaderItem
            style={{
              width: "10%",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Chat
          </StyledHeaderItem>
        </StyledTableHeader>
        <StyledLeadList>
          {state.leads.map((lead, index) => (
            <StyledLead index={index}>
              <div style={{ width: "18%", paddingLeft: "1rem" }}>
                {lead.userName}
              </div>
              <div style={{ width: "20%", paddingLeft: "1rem" }}>
                {lead.email}
              </div>
              <div style={{ width: "15%", paddingLeft: "1rem" }}>
                {lead.phoneNo}
              </div>
              <div style={{ width: "17%", paddingLeft: "1rem" }}>
                {lead.location}
              </div>
              <div
                style={{
                  width: "10%",
                  paddingLeft: "1rem",
                  gap: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:
                      lead.confidance === "Low"
                        ? "#FF6F00"
                        : lead.confidance === "Medium"
                        ? "#FFFF33"
                        : "#39FF14",
                  }}
                >
                  <StyledCircle index={index} />
                </div>
                {lead.confidance}
              </div>
              <div
                style={{
                  width: "10%",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {lead.createdAt}
              </div>
              <div
                style={{
                  width: "10%",
                  paddingLeft: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button onClick={() => toChat(lead.id)} type="outline">
                  Chat
                </Button>
              </div>
            </StyledLead>
          ))}
        </StyledLeadList>
      </StyledLeadTable>
      <Pagination
        page={state.page}
        totalPage={state.totalPage}
        setPage={setPage}
      />
    </StyledBusinessLeads>
  );
}

const StyledBusinessLeads = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  overflow-x: auto;
  @media (min-width: 768px) {
    height: 92%;
    align-items: center;
  }
`;

const StyledLeadTable = styled.div`
  width: 1000px;
  height: 85%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  margin: 0rem 2rem;

  @media (min-width: 768px) {
    width: 95%;
    margin: 0rem;
  }
`;

const StyledTableHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${(p) => p.theme.color.font1};
`;

const StyledHeaderItem = styled.div`
  padding-left: 1rem;
  border-right: 1px dashed gray;
`;

const StyledLeadList = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledLead = styled.div<{ index: number }>`
  width: 100%;
  min-height: 51.5px;
  display: flex;
  font-weight: 500;
  color: ${(p) => p.theme.color.font1};
  background-color: ${(p) =>
    p.index % 2 === 0 ? p.theme.color.base5 : p.theme.color.base6};
  align-items: center;
`;

const StyledCircle = styled.div<{ index: number }>`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: ${(p) =>
    p.index % 2 === 0 ? p.theme.color.base5 : p.theme.color.base6};
`;

export default BusinessLeads;
