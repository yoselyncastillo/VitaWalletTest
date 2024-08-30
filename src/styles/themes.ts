export const RADIUS = {
  md: "6px",
  lg: "12px",
};

const SIZE_BASE = 16;

export const FONT_SIZES = {
  xxs: `${12 / SIZE_BASE}rem`,
  xs: `${14 / SIZE_BASE}rem`,
  sm: `${16 / SIZE_BASE}rem`,
  md: `${24 / SIZE_BASE}rem`,
  lg: `${28 / SIZE_BASE}rem`,
  xl: `${48 / SIZE_BASE}rem`,
};

export const LINE_HEIGHT = {
  xxs: `${16 / SIZE_BASE}rem`,
  xs: `${19 / SIZE_BASE}rem`,
  sm: `${22 / SIZE_BASE}rem`,
  md: `${33 / SIZE_BASE}rem`,
  lg: `${38 / SIZE_BASE}rem`,
  xl: `${65 / SIZE_BASE}rem`,
};

export const FONT_WEIGHTS = {
  regular: 400,
  semiBold: 600,
};

export const COLORS = {
  pure_black: "#000000",
  black: "#010E11",
  white: "#F9F9FA",
  gray_1: "#B9C1C2",
  gray_2: "#DEE0E0",
  gray_3: "#F5F6F6",
  blue_1: "#167287",
  blue_2: "#05BCB9",
  blue_gradient: "linear-gradient(90deg, #05BCB9 0%, #167287 100%)",
  red: "#CE3434",
};

export type ColorNames = keyof typeof COLORS;
