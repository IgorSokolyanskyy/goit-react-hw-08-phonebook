import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormList = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 0px;
`;

export const Input = styled(Field)`
  width: 240px;
  margin-top: 2px;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 25px;
  appearance: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: inset 1px 1px 2px #737171, inset -1px -1px 2px #737171;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 2px 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  outline: none;
  border: none;
  width: 100px;
  height: 25px;
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;

  &:focus,
  :hover {
    background-color: #00a226;
    transform: scale(1.15);
  }

  &:active {
    background-color: #18c20ef2;
    transform: scale(0.95);
  }

  transition: all 0.2s ease-in-out;
`;
