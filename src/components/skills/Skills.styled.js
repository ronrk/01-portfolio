import styled from "styled-components";

const SkillsWrapper = styled.section`
  text-align: center;
  & .logo {
    max-width: 60px;
    mix-blend-mode: multiply;
  }

  & .skills__icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    justify-content: flex-start;
    place-items: center;
    gap: 1em;
    height: 30%;
  }

  & .skills__img {
    /* opacity: 0.5; */
    mix-blend-mode: hue;
  }

  @media screen and (max-width: 800px) {
    justify-self: center;
    margin-inline: auto;
    --gap: 1rem;
    & .skills__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export default SkillsWrapper;
