import styled from 'styled-components';
import { timerMargin } from '../../assets/img';
import { JosefinSansParagraph, StyledTitle } from '../shared/shared.styled';

export const CountdownWrapper = styled.div`
  background: url(${timerMargin}) no-repeat;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-top: 20px;

  @media (min-width: 1025px) {
    width: 80%;
    height: 200px;
    margin-top: 50px;
  }
`;

export const CountdownTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: -20px;

  @media (min-width: 1025px) {
    margin-bottom: -50px;
  }
`;

export const CountdownTitle = styled(StyledTitle)`
  font-size: 1.5rem;
  margin-top: 0;

  @media (min-width: 1025px) {
    margin-top: 10px;
    font-size: 2.5rem;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

export const CountdownNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  text-align: center;
`;

export const CountdownNumber = styled(JosefinSansParagraph)`
  text-align: center;
  font-size: 2rem;
  margin: 0;
`;

export const CountdownText = styled(JosefinSansParagraph)`
  text-align: center;
  font-size: 0.25rem;
`;