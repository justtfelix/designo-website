import styled from "styled-components";
import { ContentColor } from "../../interfaces";

const NavContent = styled.nav<ContentColor>`
  ul {
    display: flex;
    align-items: center;
    column-gap: 35px;

    a {
      ${({ isLightBg, theme }) => `
        color: ${isLightBg ? theme.colors.secondary.darkGrey : theme.colors.primary.white};
        transition: ${theme.transition};
      `}
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.peach};
      }
    }
  }
`;

export default NavContent;