import React from "react";
import styled, { CSSProperties } from "styled-components";

type Props = {
  type: "outline" | "primary";
  children?: React.ReactNode;
  onClick?: () => void;
  sx?: CSSProperties;
};

function Button({ type, children, sx, onClick }: Props) {
  return (
    <StyledButton onClick={onClick} style={sx} type={type}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.div<{ type: "outline" | "primary" }>`
  padding: 0.4rem 1rem;
  border-radius: 5px;
  border: ${(p) =>
    p.type === "outline" ? `1px solid ${p.theme.color.blue}` : "none"};
  background-color: ${(p) =>
    p.type === "outline" ? "transparent" : `${p.theme.color.blue}`};
  color: ${(p) => (p.type === "outline" ? `${p.theme.color.blue}` : "white")};
  cursor: pointer;
  gap: 1rem;
`;

export default Button;
