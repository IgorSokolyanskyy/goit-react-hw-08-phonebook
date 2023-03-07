import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 95px;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid white;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
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
  margin-top: 6px;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 25px;
  appearance: none;
  background-color: ${props => props.theme.colors.buttonBg};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
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
  margin-bottom: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
