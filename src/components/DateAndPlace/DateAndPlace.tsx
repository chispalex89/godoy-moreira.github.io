import React, { FC } from 'react';
import {
  DateAndPlaceBorderLeftImage,
  DateAndPlaceBorderRightImage,
  DateAndPlaceWrapper,
  DateAndPlaceTitleContainer,
  DateAndPlaceTitleImage,
  DateAndPlaceTitle,
  DateAndPlaceIcon,
  DateAndPlaceSubtitle,
  DateAndPlaceText,
  DateAndPlaceColumn,
  DateAndPlaceColumnsContainer,
  DateAndPlaceHowToGetThereContainer,
  DateAndPlaceMapIcon,
  DateAndPlaceMapContainer,
  DateAndPlaceMapRowColumn,
  DateAndPlaceMapColumn,
  DateAndPlaceMap,
  ClickToEnlargeOverlay,
} from './DateAndPlace.styled';
import { DateAndPlaceImage } from './DateAndPlace.styled';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import {
  border3Left,
  border3Right,
  branchLeft,
  branchRight,
  rings,
  church,
  toast,
  waze,
  maps,
  elPulteMap,
} from '../../assets/img';

const onClickHandler = (app: string) => {
  if (app === 'waze') {
    window.open('https://waze.com/ul/h9fxejch27&navigate=yes');
  } else {
    window.open('https://maps.app.goo.gl/UxNe5NXuerKKp7cDA?g_st=ico');
  }
};

interface DateAndPlaceProps {}

const DateAndPlace: FC<DateAndPlaceProps> = () => (
  <DateAndPlaceWrapper>
    <DateAndPlaceImage src={rings} />
    <DateAndPlaceBorderLeftImage src={border3Left} />
    <DateAndPlaceBorderRightImage src={border3Right} />
    <DateAndPlaceTitleContainer>
      <DateAndPlaceTitleImage src={branchLeft} />
      <DateAndPlaceTitle>06 de abril de 2024</DateAndPlaceTitle>
      <DateAndPlaceTitleImage src={branchRight} />
    </DateAndPlaceTitleContainer>
    <DateAndPlaceColumnsContainer>
      <DateAndPlaceColumn>
        <DateAndPlaceIcon src={church} />
        <DateAndPlaceSubtitle>Ceremonia</DateAndPlaceSubtitle>
        <DateAndPlaceText>Iglesia Valle de los Ángeles</DateAndPlaceText>
        <DateAndPlaceText>
          55 calle 26-35 zona 24 Finca el Pulté
        </DateAndPlaceText>
        <DateAndPlaceText>14:00</DateAndPlaceText>
      </DateAndPlaceColumn>
      <DateAndPlaceColumn>
        <DateAndPlaceIcon src={toast} />
        <DateAndPlaceSubtitle>Recepción</DateAndPlaceSubtitle>
        <DateAndPlaceText>El Pulté Ecuestre</DateAndPlaceText>
        <DateAndPlaceText>15:30 Coctel de bienvenida</DateAndPlaceText>
        <DateAndPlaceText>16:30 Recepción</DateAndPlaceText>
      </DateAndPlaceColumn>
    </DateAndPlaceColumnsContainer>
    <DateAndPlaceMapContainer>
      <DateAndPlaceMapRowColumn>
        <DateAndPlaceSubtitle>¿Cómo llegar?</DateAndPlaceSubtitle>
        <DateAndPlaceHowToGetThereContainer>
          <DateAndPlaceMapIcon
            onClick={() => onClickHandler('waze')}
            src={waze}
          />
          <DateAndPlaceMapIcon
            onClick={() => onClickHandler('maps')}
          src={maps} />
        </DateAndPlaceHowToGetThereContainer>
      </DateAndPlaceMapRowColumn>
      <DateAndPlaceMapColumn>
        <Zoom>
          <DateAndPlaceMap src={elPulteMap} />
          <ClickToEnlargeOverlay>
            <span>Haz clic en la imagen para agrandar</span>
          </ClickToEnlargeOverlay>
        </Zoom>
      </DateAndPlaceMapColumn>
    </DateAndPlaceMapContainer>
  </DateAndPlaceWrapper>
);

export default DateAndPlace;
