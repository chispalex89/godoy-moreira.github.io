import styled, { keyframes, css } from 'styled-components';
import { JosefinSlabParagraph, LeftImage, RightImage, StyledTitle } from '../shared/shared.styled';

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

export const ConfirmationWrapper = styled.div`
  background-color: #103a2c;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
  width: 100vw;
`;

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  @media (min-width: 1025px) {
    margin: auto;
    width: 50%;
    margin: 40px 0;
  }
`;

export const ConfirmationBorderTopLeftImage = styled(LeftImage)`
  height: unset;
  width: 100px;
  margin-top: -750px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: -1050px;
  }
`;

export const ConfirmationBorderTopRightImage = styled(RightImage)`
  height: unset;
  width: 80px;
  margin-top: -700px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: -775px;
  }
`;

export const ConfirmationBorderBottomLeftImage = styled(LeftImage)`
  height: unset;
  width: 100px;
  margin-top: 600px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: 750px;
  }
`;

export const ConfirmationBorderBottomRightImage = styled(RightImage)`
  height: unset;
  width: 80px;
  margin-top: 830px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: 1040px;
  }
`;

export const ConfirmationMessage = styled(JosefinSlabParagraph)`
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
  width: 80%;
  @media (min-width: 1025px) {
    font-size: 1.5rem;
    margin-top: 40px;
  }
`;

export const ConfirmationTitle = styled(StyledTitle)`
  color: white;
  font-size: 2rem;
  z-index: 5;
  @media (min-width: 1025px) {
    font-size: 4rem;
  }
`;

export const ConfirmationImage = styled.img`
  height: 50px;

  @media (min-width: 1025px) {
    height: 80px;
  }
`;

export const ConfirmationPikachuImage = styled.img`
  width: 200px;
  margin-top: 20px;

  @media (min-width: 1025px) {
    width: 300px;
    margin-top: 40px;
  }
`;

export const ConfirmationLogo = styled.img`
  width: 200px;
  margin-top: 20px;

  @media (min-width: 1025px) {
    width: 300px;
    margin-top: 40px;
  }
`;

export const ConfirmationButton = styled.button<ButtonProps>`
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

  ${(props: any) =>
    props.pressed &&
    css`
      animation: ${pressAnimation} 0.1s linear;
      box-shadow: 0px 1px 0px #ccc inset;
    `}

  @media (min-width: 1025px) {
    font-size: 2.5rem;
    padding: 20px 40px;
    border-radius: 40px;

  }
`;
