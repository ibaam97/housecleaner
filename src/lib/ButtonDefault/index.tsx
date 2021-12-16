import styled from "styled-components";

const ButtonDefault = styled.button<{ outline?; [props: string]: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  padding: 0.5em 2em;
  border: ${({ outline }) => (outline ? "1px solid currentColor" : "none")};
  transition: all 0.3s;
  font-size: 1rem;
  border-radius: 0.5rem;
  color: ${({ color, outline }) => (outline ? color || "#3200C8" : "white")};
  background: ${({ outline, color }) =>
    outline ? `none` : color ? color : "#3200C8"};
  /* background: ${({ color }) => (color ? color : "#3200C8")}; */
  ${({ disabled }) => disabled && `filter: grayscale(90%);`}
  background-size: 150%;
  &:focus,
  &:active {
    outline: none;
    transform: scale(1);
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export default ButtonDefault;