// import { usePathname } from "next/navigation";
// import Link from 'next/link';
import styled, { css } from "styled-components";
import { COLORS, FONT_WEIGHTS } from "../../../styles/themes";
import {  NavLink } from "react-router-dom";

const StyledSidebarMenuItem = styled(NavLink)`
  background: transparent;
  border-radius: 0px 32.5px 32.5px 0px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: ${FONT_WEIGHTS.regular};
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  text-decoration: none;
  width: 75%;
  padding: 16px 0px 16px 80px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${COLORS.blue_2};
    font-weight: ${FONT_WEIGHTS.semiBold};
  }

  &.active {
    background: ${COLORS.blue_2};
    font-weight: ${FONT_WEIGHTS.semiBold};
  }
`;

interface Props {
  path: string;
  title: string;
  onClick?: () => void;
}

export const SidebarMenuItem = ({ path, title, onClick }: Props) => {
  return (
    <StyledSidebarMenuItem to={path} onClick={onClick}>
      {title}
    </StyledSidebarMenuItem>
  );
};
