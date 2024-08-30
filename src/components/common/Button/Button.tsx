import { ButtonProps } from "../../../interfaces";
import { COLORS, RADIUS } from "../../../styles/themes";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "secondary";
  size: "base" | "full";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  border-radius: ${RADIUS.md};
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  height: fit-content;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${COLORS.blue_gradient};
      color: ${COLORS.white};
    `}
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-image: ${COLORS.blue_gradient};
      background-origin: border-box;
      color: ${COLORS.blue_1};
      box-shadow: inset 0 100vw white;
      border: 1px solid transparent;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${COLORS.gray_2};
      color: ${COLORS.white};
      box-shadow: none;
      border: none;
    `}

    ${({ size }) =>
    size === "base" &&
    css`
      max-width: 183px;
    `}

    ${({ size }) =>
    size === "full" &&
    css`
      max-width: 100%;
    `}
`;

export const Button = ({
  variant = "primary",
  size = "base",
  disabled = false,
  text,
  type,
  onClick
}: ButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} size={size} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
