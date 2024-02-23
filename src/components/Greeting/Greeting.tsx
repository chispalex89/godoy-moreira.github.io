import React, { FC } from 'react';
import {
  GreetingBorderLeftImage,
  GreetingBorderRightImage,
  GreetingColumn,
  GreetingImg,
  GreetingWrapper,
  GreetingNameText,
  GreetingSubtitle,
  GreetingSubtitleContainer,
  GreetingTitle,
  GreetingTitleContainer,
} from './Greeting.styled';
import { title, border2Left, border2Right } from '../../assets/img';
import { ColumnsContainer, StyledTitle } from '../shared/shared.styled';

interface GreetingProps {}

const Greeting: FC<GreetingProps> = () => (
  <GreetingWrapper>
    <GreetingBorderLeftImage src={border2Left} />
    <GreetingBorderRightImage src={border2Right} />
    <GreetingImg src={title} />
    <GreetingTitleContainer>
      <GreetingTitle>
        Con la bendición de Dios y de nuestros padres
      </GreetingTitle>
    </GreetingTitleContainer>
    <ColumnsContainer>
      <GreetingColumn>
        <GreetingNameText>Mirna Elizabeth Reynoso Martínez</GreetingNameText>
      </GreetingColumn>
      <GreetingColumn>
        <GreetingNameText>Hilda Elizabeth Díaz Castillo</GreetingNameText>
      </GreetingColumn>
    </ColumnsContainer>
    <ColumnsContainer>
      <GreetingColumn>
        <GreetingNameText>Nelson Alfonso Moreira Ávila (†)</GreetingNameText>
      </GreetingColumn>
      <GreetingColumn>
        <GreetingNameText>Salvador Godoy Chomo</GreetingNameText>
      </GreetingColumn>
    </ColumnsContainer>
    <GreetingTitleContainer>
      <StyledTitle>¡Nos casamos!</StyledTitle>
    </GreetingTitleContainer>
    <GreetingSubtitleContainer>
      <GreetingSubtitle>Deseamos celebrar el amor y la unión.</GreetingSubtitle>
      <GreetingSubtitle>
        Por eso nos complace que nos acompañes a vivir el inicio de este nuevo
        viaje.
      </GreetingSubtitle>
    </GreetingSubtitleContainer>
  </GreetingWrapper>
);

export default Greeting;
