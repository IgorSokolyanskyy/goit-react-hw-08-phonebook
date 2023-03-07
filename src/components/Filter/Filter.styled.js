import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: content;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 6px;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 25px;
  appearance: none;
  background-color: white;

  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px #737171, inset -1px -1px 2px #737171;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  font-size: 34px;
  margin-bottom: 12px;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
