import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  font-size: 1.6rem;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6em;
  background-color: var(--primary-color);
  flex-wrap: wrap;

  @media (max-width: 420px) {
    justify-content: center;
  }

  a {
    color: var(--secondary-color);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--tertiary-color);
    }
  }
`;
