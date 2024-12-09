import styled, { css } from "styled-components";

interface StyledButtonProps {
    variant: "add" | "edit" | "remove";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) =>
        variant === "add" &&
        css`
      background-color: #EBF7FF;
      color: black;

      &:hover {
        background-color: #D6EFFF;
      }
    `}

  ${({ variant }) =>
        variant === "edit" &&
        css`
      background-color: #0083E0;
      color: white;

      &:hover {
        background-color: #0077CC;
      }
    `}

    ${({ variant }) =>
        variant === "remove" &&
        css`
      background-color: #A11719;
      color: white;

      &:hover {
        background-color: #8F1416;
      }
    `}
`;
