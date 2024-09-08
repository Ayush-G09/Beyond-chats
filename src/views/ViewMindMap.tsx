import { useEffect, useState } from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCampground,
  faClockRotateLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { chats } from "../data/chats";
import { getArrayChunk } from "../utils";
import { mindMapType, mindMap } from "../data/mindMap";
import MindMapItem from "../components/MindMapItem";
import Modal from "../components/modals/Modal";
import AddDataModal from "../components/modals/AddDataModal";
import DataTrainingModal from "../components/modals/DataTrainingModal";
import GroundTruthModal from "../components/modals/GroundTruthModal";
import DeleteDataModal from "../components/modals/DeleteDataModal";
import Pagination from "../components/Pagination";
import Input from "../components/Input";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type State = {
  mindMapData: mindMapType[];
  page: number;
  totalPage: number;
  modal: boolean;
  modalType: "Add Data" | "Training" | "Truths" | "Edit Data" | "Delete";
  data: mindMapType;
};

function ViewMindMap() {
  const [state, setState] = useState<State>({
    mindMapData: [],
    page: 1,
    totalPage: 0,
    modal: false,
    modalType: "Add Data",
    data: { data: "", source: "", type: "PDF", createdAt: "", id: "" },
  });

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      totalPage: Math.ceil(chats.length / 10),
      mindMapData: getArrayChunk(mindMap, state.page) as mindMapType[],
    }));
  }, []);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      mindMapData: getArrayChunk(mindMap, state.page) as mindMapType[],
    }));
  }, [state.page]);

  const openModal = (
    type: "Add Data" | "Training" | "Truths" | "Edit Data" | "Delete"
  ) => {
    setState((prev) => ({ ...prev, modalType: type, modal: true }));
  };

  const editData = (id: string) => {
    const data = mindMap.find((data) => data.id === id);
    setState((prev) => ({
      ...prev,
      data: data!,
      modalType: "Edit Data",
      modal: true,
    }));
  };

  const deleteData = () => {
    setState((prev) => ({ ...prev, modalType: "Delete", modal: true }));
  };

  const setPage = (no: number) => {
    setState((prev) => ({ ...prev, page: no }));
  };

  return (
    <div style={{ overflowX: "auto", height: "84%" }}>
      <StyledMindMap>
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Input
            sx={{
              width: "30%",
              marginLeft: "2rem",
              height: "40px",
              backgroundColor: theme === "dark" ? "#272727" : "#D5D9DF",
            }}
            placeholder="Ex: Hello"
          />
          <Button type="primary">Search</Button>
          <Button
            onClick={() => openModal("Add Data")}
            type="primary"
            sx={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
            <div>Add Data</div>
          </Button>
          <Button
            onClick={() => openModal("Training")}
            type="primary"
            sx={{
              backgroundColor: "#FA2871",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faClockRotateLeft} />
            <div>Data Training Status</div>
          </Button>
          <Button
            onClick={() => openModal("Truths")}
            type="outline"
            sx={{
              marginRight: "1rem",
              border: "1px solid #FA2871",
              color: "#FA2871",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faCampground} />
            <div>Ground Truths</div>
          </Button>
        </div>
        <StyledChartCon>
          <StyledHeader>
            <div
              style={{
                width: "60%",
                paddingLeft: "1rem",
                borderRight: "1px dashed gray",
              }}
            >
              Data
            </div>
            <div
              style={{
                width: "10%",
                paddingLeft: "1rem",
                borderRight: "1px dashed gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Source
            </div>
            <div
              style={{
                width: "10%",
                paddingLeft: "1rem",
                borderRight: "1px dashed gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Type
            </div>
            <div
              style={{
                width: "10%",
                paddingLeft: "1rem",
                borderRight: "1px dashed gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Created At
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
              Actions
            </div>
          </StyledHeader>
          <StyledChart>
            {state.mindMapData.map((data, index) => (
              <MindMapItem
                edit={editData}
                onDelete={deleteData}
                data={data}
                index={index}
                key={data.id}
              />
            ))}
          </StyledChart>
        </StyledChartCon>
        <Pagination
          page={state.page}
          totalPage={state.totalPage}
          setPage={setPage}
        />
      </StyledMindMap>
      {state.modal && (
        <Modal
          onClose={() => setState((prev) => ({ ...prev, modal: false }))}
          width={state.modalType === "Training" ? "50vw" : "40vw"}
        >
          {state.modalType === "Training" ? (
            <DataTrainingModal
              onClose={() => setState((prev) => ({ ...prev, modal: false }))}
            />
          ) : state.modalType === "Truths" ? (
            <GroundTruthModal />
          ) : state.modalType === "Delete" ? (
            <DeleteDataModal
              onClose={() => setState((prev) => ({ ...prev, modal: false }))}
            />
          ) : (
            <AddDataModal
              data={state.data}
              modalType={state.modalType}
              onClose={() => setState((prev) => ({ ...prev, modal: false }))}
            />
          )}
        </Modal>
      )}
    </div>
  );
}

const StyledMindMap = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${(p) => p.theme.color.font1};
`;

const StyledChartCon = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const StyledChart = styled.div`
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

export default ViewMindMap;
