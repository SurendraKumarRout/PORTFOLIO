import styled from "styled-components";

export const Container = styled.section`
  margin-top: 5rem;
  /* display: grid; */
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  /* #container {
    margin: auto;
    text-align: center;
    justify-content: center;
  } */

  #tools {
    text-align: center;
    margin: auto;
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
    margin: center;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4%;
    background-color: #c4a484;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    margin-bottom: 1rem;
    padding: 0.9rem;

    p {
      display: inline-block;
      /* position: absolute; */
      top: 50%;
      transform: translateY(-50%);
      margin-left: 1rem;
    }

    img {
      text-align: left;
      width: 3.4rem;
      display: inline-block;
    }
  }

  #frontEnd {
    margin: auto;
  }

  #backEnd {
    margin: auto;
  }

  #dataBase {
    margin: auto;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
    margin-top: 2rem;
    color: var(--green);
  }

  h3 {
    display: inline-block;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: var(--white);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  #head {
    font-size: 2.7rem;
    font-weight: 700;
    /* display: inline-block ; */
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;
