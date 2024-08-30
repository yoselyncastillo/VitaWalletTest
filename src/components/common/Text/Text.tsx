import styled, { css } from "styled-components";
import {
  ColorNames,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHT,
} from "../../../styles/themes";

const CustomText = styled.span<CustomTextProps>`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: ${({ fontWeight }) => FONT_WEIGHTS[fontWeight]};
  font-size: ${({ fontSize }) => FONT_SIZES[fontSize]};
  line-height: ${({ fontSize }) => LINE_HEIGHT[fontSize]};
  align-self: ${({ align_self }) => align_self || "flex-start"};
  color: ${({ color }) => (color ? COLORS[color] : COLORS.black)};

  ${({ color }) =>
    color === "blue_gradient" &&
    css`
      color: ${COLORS.blue_1};
      @supports (
        (-webkit-background-clip: text) or
          (-webkit-text-fill-color: transparent)
      ) {
        background: ${COLORS.blue_gradient};
        background-size: contain;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}
`;
export interface TextProps {
  fontSize: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  fontWeight: "regular" | "semiBold";
  text: string | number;
  color?: ColorNames;
  align_self?: string;
}
export interface CustomTextProps {
  fontSize: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  fontWeight: "regular" | "semiBold";
  color?: ColorNames;
  align_self?: string;
}
export const Text = ({
  fontSize,
  fontWeight,
  text,
  color,
  align_self,
}: TextProps) => {
  return (
    <CustomText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      align_self={align_self}
    >
      {text}
    </CustomText>
  );
};
