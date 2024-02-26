import styled from 'styled-components';
import { ColumnsContainer, JosefinSansParagraph, LeftImage, RightImage, StyledTitle } from '../shared/shared.styled';

export const DateAndPlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;

  @media (min-width: 1025px) {
    margin-top: 40px;
  }
`;

export const DateAndPlaceImage = styled.img`
  height: 50px;

  @media (min-width: 1025px) {
    height: 80px;
  }
`;

export const DateAndPlaceBorderLeftImage = styled(LeftImage)`
  height: 150px;
  @media (min-width: 1025px) {
    height: 250px;
  }
`;

export const DateAndPlaceBorderRightImage = styled(RightImage)`
  height: 64px;

  @media (min-width: 1025px) {
    margin-top: 12px;
    height: 105px;
  }
`;

export const DateAndPlaceTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  width: 85vw;

  @media (min-width: 1025px) {
    width: 38vw;
  }
`;

export const DateAndPlaceHowToGetThereContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 1025px) {
    margin-top: 20px;
  }
`;

export const DateAndPlaceTitleImage = styled.img`
  width: 25px;
  object-fit: cover;
  z-index: 5;

  @media (min-width: 1025px) {
    width: 80px;
  }
`;

export const DateAndPlaceTitle = styled(StyledTitle)`
  font-size: 2rem;
  @media (min-width: 1025px) {
    font-size: 4rem;
  }
`;

export const DateAndPlaceColumnsContainer = styled(ColumnsContainer)`
  justify-content: space-between;
  margin-top: 20px;

  @media (min-width: 1025px) {
    margin-top: 40px;
  }
`;

export const DateAndPlaceMapContainer = styled(DateAndPlaceColumnsContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const DateAndPlaceColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  width: 150px;

  @media (min-width: 1025px) {
    width: 285px;
  }
`;

export const DateAndPlaceMapColumn = styled(DateAndPlaceColumn)`
  width: 150px;
  margin: 10px 0;

  @media (min-width: 1025px) {
    display: flex;
    width: 285px;
  }
`;

export const DateAndPlaceMapRowColumn = styled(DateAndPlaceColumn)`
  width: 250px;

  @media (min-width: 1025px) {
    width: 285px;
  }
`;

export const DateAndPlaceSubtitle = styled(StyledTitle)`
  font-size: 1.5rem;

  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;

export const DateAndPlaceIcon = styled.img`
  height: 60px;
  z-index: 5;

  @media (min-width: 1025px) {
    height: 100px;
  }
`;

export const DateAndPlaceText = styled(JosefinSansParagraph)`
  margin: 0;
  font-size: 0.75rem;

  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;

export const DateAndPlaceMapIcon = styled.img`
  height: 60px;
  z-index: 5;

  @media (min-width: 1025px) {
    height: 85px;
  }
`;

export const DateAndPlaceMap = styled.img`
  width: 150px;

  @media (min-width: 1025px) {
    width: 400px;
  }
`;

export const ClickToEnlargeOverlay = styled.div`
  position: absolute;
  top: 90%;
  left: 0;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); // semi-transparent black
  color: white; // white text
  font-size: 9.5px; // adjust as needed
  mouse-events: none; // allow clicks to go through

  span {
    text-align: center;
  }

  @media (min-width: 1025px) {
    height: 10%;
    align-items: center;
    top: 90%;
    font-size: 16px;
  }
`;