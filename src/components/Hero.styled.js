import styled from "styled-components";

const HeroWrapper = styled.div`
  align-self: center;

  padding-right: 2rem;
  margin-block: 2rem;
  /* max-width: 90%; */
  /* --gap: 3rem; */

  & h1 {
    margin-top: -2rem;
  }

  & .content {
    /* gap: 5rem; */
    justify-content: space-between;
    @media screen and (max-width: 1500px) {
      flex-direction: column;
    }
  }

  & img {
    opacity: 0.95;
  }

  & p {
    margin-top: 1em;
    line-height: 1.3;
    /* max-width: 50ch; */
  }

  @media screen and (max-width: 1500px) {
    flex-direction: column;
    /* align-items: flex-start; */
    & p {
      margin-top: 0.3em;
    }
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    padding: 0;

    margin-inline: auto;
    align-items: center;
    & p {
      margin-top: 0.2em;
    }
    /* align-items: flex-start; */
    & p {
      margin-inline: auto;
    }
  }
`;

export default HeroWrapper;
