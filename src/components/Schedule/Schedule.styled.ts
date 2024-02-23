import styled from 'styled-components';
import { JosefinSlabParagraph, LeftImage, RightImage, StyledTitle } from '../shared/shared.styled';
import { timeline } from '../../assets/img';

export const ScheduleWrapper = styled.div`
`;

export const ScheduleBorderLeftImage = styled(LeftImage)`
  height: unset;
  width: 120px;
  margin-top: -10px;

  @media (min-width: 1025px) {
    width: 300px;
    margin-top: -40px;
  }
`;

export const ScheduleBorderRightImage = styled(RightImage)`
  height: unset;
  width: 110px;
  margin-top: -128px;

  @media (min-width: 1025px) {
    margin-top: -387px;
    width: 300px;
  }
`;

export const ScheduleTitle = styled(StyledTitle)`
  font-size: 2.5rem;

  @media (min-width: 1025px) {
    font-size: 4rem;
  }
`;


export const ScheduleThreeColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 90vw;

  @media (min-width: 1025px) {
    width: 34vw;
  }
`;

export const ScheduleThreeColumns = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ScheduleMiddleColumn = styled.div`
  height: 330px;
  width: 55%;
  background: url(${timeline}) no-repeat;
  background-size: contain;
`;

export const ScheduleRowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ScheduleRightRowsContainer = styled(ScheduleRowsContainer)`
  justify-content: space-evenly;
`;

export const ScheduleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleImage = styled.img`
  height: 50px;
  width: 50px;

  @media (min-width: 1025px) {
    height: 64px;
    width: 64px;
    margin: 0 20px;
  }
`;

export const ScheduleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 76px;

  @media (min-width: 1025px) {
    width: 150px;
  }
`;

export const ScheduleText = styled(JosefinSlabParagraph)`
  margin: 0;
  text-align: right;
`;

export const ScheduleRightTextContainer = styled(ScheduleTextContainer)`
  align-items: flex-start;
`;

export const ScheduleRightText = styled(ScheduleText)`
  text-align: left;
`;