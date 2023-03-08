import styled from '@emotion/styled';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 420px;
  padding: 0;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100%;
  }

  @media only screen and (min-width: 769px) {
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 380px;

  @media only screen and (max-width: 768px) {
    min-width: 0;
    width: 85%;
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const Icon = styled(RiDeleteBin2Line)`
  color: red;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  gap: 50px;
  max-width: 400px;
`;

export const Name = styled.p`
  max-width: 200px;
  font-weight: 400;
`;

export const Number = styled.p`
  max-width: 150px;
`;
