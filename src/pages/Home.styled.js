import styled from "styled-components";

const HomeWrapper = styled.main`
  min-height: 90vh;
  &.grid-container {
    grid-template-columns:
      minmax(1em, 2em) minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(
        min-content,
        1fr
      )
      minmax(min-content, 1fr) minmax(min-content, 35vw);
    grid-template-areas:
      ". hero hero hero hero img"
      ". skills projects projects projects projects";
  }

  & .hero {
    grid-area: hero;
    justify-self: start;
  }

  & .skills {
    grid-area: skills;
    justify-self: start;
    align-self: center;
  }
  & .home__projects {
    grid-area: projects;
    display: grid;
    /* margin-inline: auto; */
    grid-template-columns: repeat(auto-fit, 30%);
  }
  & .home__img {
    grid-area: img;
    justify-self: end;

    border-radius: 3px;
    box-shadow: 10px 0px 0px 0px rgba(0, 0, 0, 0.3);

    max-width: 100%;
    min-height: 90%;
    object-fit: cover;
    object-position: top left;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 10px 10px 0px 10px rgba(0, 0, 0, 0.3);
    }

    @media screen and (max-width: 1600px) {
      transform: translate(0);
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      max-height: 40vh;
      object-fit: cover;
      object-position: left center;
    }
    @media screen and (max-width: 800px) {
      object-fit: fill;
    }
  }

  @media screen and (max-width: 800px) {
    &.grid-container {
      grid-template-columns:
        minmax(1em, 2em) minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(
          min-content,
          1fr
        )
        minmax(min-content, 1fr) minmax(1em, 2em);
      grid-template-areas:
        "img img img img img img"
        ". hero hero hero hero . "
        " . projects projects projects projects ."
        ". skills skills skills skills .";
    }
  }
`;

export default HomeWrapper;
