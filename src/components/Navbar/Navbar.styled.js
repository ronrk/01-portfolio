import styled from "styled-components";

const NavbarWrapper = styled.header`
  background-color: var(--color-green);
  padding: 2rem 4rem;
  & nav {
    justify-content: space-between;
    align-items: center;
  }
  & .cta {
    z-index: 2000;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  & ul {
    list-style-type: none;
    --gap: clamp(1rem, 4vw, 4rem);
    align-items: center;

    & li:not(:last-child) {
      border-right: 2px solid black;
      padding-right: clamp(1rem, 4vw, 4rem);
    }
    & a {
      text-decoration: none;
      text-transform: uppercase;
      font-family: inherit;
      transition: all 0.2s;
      font-weight: 700;

      &:hover {
        color: var(--color-secondary);
        font-weight: 500;
        letter-spacing: 2px;
      }
    }
  }
`;

export default NavbarWrapper;
