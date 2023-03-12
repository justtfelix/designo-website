import styled from "styled-components";

const NavContent = styled.nav`
  ul {
    display: flex;
    align-items: center;
    column-gap: 35px;

    a {
      color: ${({ theme }) => theme.colors.secondary.darkGrey};
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }
`;

export default NavContent;