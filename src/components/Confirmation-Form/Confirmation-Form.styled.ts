import styled, { css, keyframes } from 'styled-components';
import { GreatVibesParagraph } from '../shared/shared.styled';

const pressAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
`;

interface ButtonProps {
  pressed: boolean;
}

export const ConfirmationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const ConfirmationFormTitle = styled(GreatVibesParagraph)`
  margin: 0;
  font-size: 2.5rem;
  width: 225px;
  margin-top: 20px;
  color: white;

  @media (min-width: 1025px) {
    font-size: 3.5rem;
    width: 500px;
    margin-top: 40px;
  }
`;

export const ConfirmationFormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ConfirmationFormCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  span {
    margin: 10px;
  }
`;

export const ConfirmationFormCheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmationFormLabel = styled.label`
  font-family: 'JosefinSans';
  font-size: 1rem;
  margin: 10px;
  width: 145px;

  @media (min-width: 1025px) {
    font-size: 1.5rem;
    width: 250px;
  }
`;

export const ConfirmationFormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 1rem;
  width: 130px;

  @media (min-width: 1025px) {
    font-size: 1.5rem;
    width: 250px;
  }
`;

export const ConfirmationFormNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

export const ConfirmationFormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 1rem;
  width: 130px;
  text-align: center;

  @media (min-width: 1025px) {
    font-size: 1.5rem;
    width: 250px;
  }
`;

export const ConfirmationCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  outline: none;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 5px;
  border: 2px solid #555;
  position: relative;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }

  &:checked {
    background: #555;
  }

  &:checked::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ConfirmationButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;

  @media (min-width: 1025px) {
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ConfirmationFormSubmitButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: #ececec;
  font-family: 'JosefinSlab';
  color: #1c392d;
  border: none;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 3px 0px #ccc;
  transition: box-shadow 0.3s ease;
  user-select: none; /* Prevent text selection */
  width: 150px;

  ${(props: any) =>
    props.pressed &&
    css`
      animation: ${pressAnimation} 0.1s linear;
      box-shadow: 0px 1px 0px #ccc inset;
    `}

  @media (min-width: 1025px) {
    padding: 20px 40px;
    border-radius: 40px;
    width: 200px;
  }
`;

export const ConfirmationCancelButton = styled(ConfirmationFormSubmitButton)`
  background-color: #ddd;
  box-shadow: 0px 3px 0px #ccc;
  margin-top: 20px;

  @media (min-width: 1025px) {
    margin-top: 0;
  }
`;
