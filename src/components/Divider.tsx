import styled, { CSSProperties } from "styled-components";

type Props = {
  sx?: CSSProperties;
};

function Divider({ sx }: Props) {
  return <StyledDivider style={sx} />;
}

const StyledDivider = styled.div`
  width: 95%;
  height: 1px;
  background-color: ${(p) => p.theme.color.base4};
`;

export default Divider;
