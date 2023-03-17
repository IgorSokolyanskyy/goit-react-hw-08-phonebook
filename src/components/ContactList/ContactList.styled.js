import styled from '@emotion/styled';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 420px;
  padding: 0;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  border-radius: 5px;

  :hover {
    background-color: #00a226;
  }

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
  justify-content: space-between;

  gap: 50px;

  @media only screen and (max-width: 768px) {
    gap: 30px;
  }
`;

export const Name = styled.p`
  display: flex;
  width: 180px;
  @media only screen and (max-width: 768px) {
    width: 120px;
  }
`;

export const Number = styled.p`
  display: flex;

  width: 130px;

  @media only screen and (max-width: 768px) {
    width: 80px;
  }
`;
