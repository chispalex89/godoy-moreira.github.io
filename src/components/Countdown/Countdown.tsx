import React, { FC } from 'react';
import {
  CountdownContainer,
  CountdownNumberContainer,
  CountdownNumber,
  CountdownTitleContainer,
  CountdownWrapper,
  CountdownTitle,
} from './Countdown.styled';
import CountdownClock, { CountdownRenderProps } from 'react-countdown';

interface CountdownProps {}

const date = new Date('2024-04-06T20:00:00.000Z');

const renderTimer = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownRenderProps) => (
  <CountdownContainer>
    <CountdownNumberContainer>
      <CountdownNumber>{days.toString().padStart(2, '0')}</CountdownNumber>
      <span>Días</span>
    </CountdownNumberContainer>
    <CountdownNumberContainer>
      <CountdownNumber>{hours.toString().padStart(2, '0')}</CountdownNumber>
      <span>Horas</span>
    </CountdownNumberContainer>
    <CountdownNumberContainer>
      <CountdownNumber>{minutes.toString().padStart(2, '0')}</CountdownNumber>
      <span>Minutos</span>
    </CountdownNumberContainer>
    <CountdownNumberContainer>
      <CountdownNumber>{seconds.toString().padStart(2, '0')}</CountdownNumber>
      <span>Segundos</span>
    </CountdownNumberContainer>
  </CountdownContainer>
);

const Countdown: FC<CountdownProps> = () => (
  <CountdownWrapper>
    <CountdownTitleContainer>
      <CountdownTitle>Faltan</CountdownTitle>
    </CountdownTitleContainer>
    <CountdownClock date={date} renderer={renderTimer} />
  </CountdownWrapper>
);

export default Countdown;
