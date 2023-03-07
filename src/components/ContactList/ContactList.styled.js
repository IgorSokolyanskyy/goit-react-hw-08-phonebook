import styled from '@emotion/styled';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100vh;
  overflow: auto;
  padding: 0;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 420px;
  margin-right: 15px;

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
