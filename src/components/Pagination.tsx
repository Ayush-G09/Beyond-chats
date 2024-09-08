import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import styled from "styled-components";
import Label from "./Label";

type Props = {
  page: number;
  totalPage: number;
  setPage: (no: number) => void;
};

function Pagination({ page, totalPage, setPage }: Props) {
  return (
    <StyledPagination>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {page > 1 && (
          <StyledButton onClick={() => setPage(page - 1)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </StyledButton>
        )}
        {page > 1 && <Label sub>{page - 1}</Label>}
        <Label sx={{ fontSize: "1.1rem" }}>{page}</Label>
        {page < totalPage && <Label sub>{page + 1}</Label>}
        {page < totalPage && (
          <StyledButton onClick={() => setPage(page + 1)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </StyledButton>
        )}
      </div>
      <Button sx={{ marginLeft: "auto" }} type="outline">
        Export CSV
      </Button>
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  align-items: center;
  padding-left: 2rem;

  @media (min-width: 768px) {
    padding-left: 0rem;
  }
`;

const StyledButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(p) => p.theme.color.font1};
  background-color: ${(p) => p.theme.color.base7};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export default Pagination;
