import styled from '@emotion/styled';

export const Desk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  width: 420px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
