import { FC } from 'react';
import {
  ScheduleBorderLeftImage,
  ScheduleBorderRightImage,
  ScheduleImage,
  ScheduleRightRowsContainer,
  ScheduleMiddleColumn,
  ScheduleRow,
  ScheduleRowsContainer,
  ScheduleText,
  ScheduleTextContainer,
  ScheduleThreeColumns,
  ScheduleThreeColumnsContainer,
  ScheduleTitle,
  ScheduleWrapper,
  ScheduleRightTextContainer,
  ScheduleRightText,
  ScheduleRightColumn,
} from './Schedule.styled';
import {
  border4Left,
  border4Right,
  bottle,
  church,
  dinner,
  music,
  toast,
} from '../../assets/img';

interface ScheduleProps {}

const Schedule: FC<ScheduleProps> = () => (
  <ScheduleWrapper>
    <ScheduleBorderLeftImage src={border4Left} />
    <ScheduleBorderRightImage src={border4Right} />
    <ScheduleTitle>Itinerario</ScheduleTitle>
    <ScheduleThreeColumnsContainer>
      <ScheduleThreeColumns>
        <ScheduleRowsContainer>
          <ScheduleRow>
            <ScheduleTextContainer>
              <ScheduleText>14:00</ScheduleText>
              <ScheduleText>Ceremonia</ScheduleText>
            </ScheduleTextContainer>
            <ScheduleImage src={church} />
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleTextContainer>
              <ScheduleText>16:00</ScheduleText>
              <ScheduleText>Recepción</ScheduleText>
            </ScheduleTextContainer>
            <ScheduleImage src={music} />
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleTextContainer>
              <ScheduleText>18:00</ScheduleText>
              <ScheduleText>Cena</ScheduleText>
            </ScheduleTextContainer>
            <ScheduleImage src={dinner} />
          </ScheduleRow>
        </ScheduleRowsContainer>
      </ScheduleThreeColumns>
      <ScheduleMiddleColumn />
      <ScheduleRightColumn>
        <ScheduleRightRowsContainer>
          <ScheduleRow>
            <ScheduleImage src={toast} />
            <ScheduleRightTextContainer>
              <ScheduleRightText>15:30</ScheduleRightText>
              <ScheduleRightText>Coctel de Bienvenida</ScheduleRightText>
            </ScheduleRightTextContainer>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleImage src={bottle} />
            <ScheduleRightTextContainer>
              <ScheduleRightText>17:00</ScheduleRightText>
              <ScheduleRightText>Brindis</ScheduleRightText>
            </ScheduleRightTextContainer>
          </ScheduleRow>
        </ScheduleRightRowsContainer>
      </ScheduleRightColumn>
    </ScheduleThreeColumnsContainer>
  </ScheduleWrapper>
);

export default Schedule;
