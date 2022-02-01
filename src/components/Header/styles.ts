import styled from 'styled-components'

export const Container = styled.header`
  background: #22223B;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3rem 2rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  button {
    background: #4A4E69;
    border: 0;

    font-size: 1.4rem;
    color: #fff;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;