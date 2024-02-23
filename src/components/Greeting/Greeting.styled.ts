import styled from 'styled-components';
import { JosefinSlabParagraph, LeftImage, RightImage } from '../shared/shared.styled';

export const GreetingWrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1025px) {
    margin-top: 40px;
  }
`;

export const GreetingImg = styled.img`
  margin-top: 0;
  width: 350px;
  object-fit: cover;
  z-index: 5;

  @media (min-width: 1025px) {
    margin-top: 40px;
    width: 500px;
  }
`;

export const GreetingBorderLeftImage = styled(LeftImage)`
  height: 150px;
  margin-top: 50px;
  margin-bottom: -50px;

  @media (min-width: 1025px) {
    height: 250px;
  }
`;

export const GreetingBorderRightImage = styled(RightImage)`
  height: 100px;
  margin-top: 30px;

  @media (min-width: 1025px) {
    height: 150px;
  }
`;

export const GreetingTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const GreetingTitle = styled(JosefinSlabParagraph)`
  margin-top: 30px;
  font-size: 0.75rem;
  height: 15px;

  @media (min-width: 1025px) {
    font-size: 1.25rem;
    height: 25px;
  }
`;

export const GreetingSubtitleContainer = styled(GreetingTitleContainer)`
  margin-bottom: 30px;
`;

export const GreetingSubtitle = styled(GreetingTitle)`
  margin: 0;
  max-width: 350px;

  @media (min-width: 1025px) {
    max-width: 485px;
  }
`;

export const GreetingColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const GreetingNameText = styled(JosefinSlabParagraph)`
  font-size: 0.75rem;
  margin: 0;
  width: 183px;
  height: 15px;

  @media (min-width: 1025px) {
    font-size: 1.25rem;
    width: 350px;
    height: 25px;
  }
`;
