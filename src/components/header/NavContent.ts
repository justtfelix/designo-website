import styled from "styled-components";

const NavContent = styled.nav`
  ul {
    display: flex;
    align-items: center;
    column-gap: 35px;

    a {
      ${({ theme }) => `
        color: ${theme.colors.secondary.darkGrey};
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