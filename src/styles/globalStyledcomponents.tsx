import styled, { css } from "styled-components";

interface ContainerProps {
  display?:
    | "flex"
    | "block"
    | "grid"
    | "inline-flex"
    | "inline-block"
    | "inline-grid";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  padding?: string;
  margin?: string;
  grid_column?: string;
  grid_column_start?: number;
  grid_column_end?: number;
  justify_content?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  align_items?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

export const ContainerFlex = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap }) => gap || "16px"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  justify-content: ${({ justify_content }) => justify_content || "flex-start"};
  align-items: ${({ align_items }) => align_items || "normal"};
  box-sizing: border-box;

  ${({ grid_column }) =>
    grid_column &&
    css`
      grid-column: ${grid_column};
    `}

  ${({ grid_column_start, grid_column_end }) =>
    grid_column_start || grid_column_end
      ? `
        grid-column-start: ${grid_column_start};
        grid-column-end: ${grid_column_end};
      `
      : null}
`;
