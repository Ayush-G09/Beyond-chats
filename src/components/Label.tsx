import styled, { CSSProperties } from "styled-components";

type Props = {
  children: React.ReactNode;
  sx?: CSSProperties;
  sub?: boolean;
};

function Label({ sx, children, sub = false }: Props) {
  return (
    <StyledLabel sub={sub} style={sx}>
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.div<{ sub: boolean }>`
  color: ${(p) => (p.sub ? p.theme.color.font2 : p.theme.color.font1)};
`;

export default Label;
