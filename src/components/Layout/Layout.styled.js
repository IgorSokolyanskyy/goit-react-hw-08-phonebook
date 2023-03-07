import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: auto;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(0, 0, 0, 0.6);

  color: white;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 8px;
`;
