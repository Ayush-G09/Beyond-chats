import styled, { CSSProperties } from "styled-components";

type Props = {
  placeholder: string;
  value?: string;
  sx?: CSSProperties;
};

function Input({ placeholder, sx, value }: Props) {
  return (
    <StyledInput
      placeholder={placeholder}
      type="text"
      value={value}
      style={sx}
    />
  );
}

const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  height: 50px;
  font-size: 1.1rem;
  padding: 0rem 0.5rem;
  background-color: ${(p) => p.theme.color.base1};
  color: ${(p) => p.theme.color.font1};
  width: 80%;
`;

export default Input;
