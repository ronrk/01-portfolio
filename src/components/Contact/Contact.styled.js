import styled from "styled-components";

const ContactWrapper = styled.section`
  align-self: end;

  & .socials {
    --gap: 1.5rem;
    & img {
      max-width: 30px;
    }
  }

  & .content {
    text-align: left;
  }

  & .cta {
    --gap: 0.5rem;
    margin-top: auto;
  }

  @media screen and (max-width: 1500px) {
    align-self: start;
  }
`;

export default ContactWrapper;
