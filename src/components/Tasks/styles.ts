import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
`;

export const Content = styled.section`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const NewTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: #fff;
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  input[type="checkbox"]:checked + p {
    text-decoration: line-through;
  }

  p {
    width: 100%;

    color: var(--text-body);
    font-size: 1.4rem;
  }

  button {
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem 0;

    img {
      filter: brightness(0) saturate(100%) invert(40%) sepia(49%)
        saturate(3732%) hue-rotate(330deg) brightness(112%) contrast(87%);
    }
  }

  & + & {
    margin-top: 1rem;
  }
`;