import styled from 'styled-components';
import { GreatVibesParagraph, LeftImage, RightImage } from '../shared/shared.styled';

export const DressCodeWrapper = styled.div`
  margin-top: 20px;
`;

export const DressCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1025px) {
    margin: auto;
    width: 50%;
  }
`;

export const DressCodeImage = styled.img`
  height: 75px;
`;

export const DressCodeTitle = styled(GreatVibesParagraph)`
  font-size: 2rem;
  width: 225px;
  margin: 0;

  @media (min-width: 1025px) {
    font-size: 4.5rem;
    width: 500px;
  }
`;

export const DressCodeBorderLeftImage = styled(LeftImage)`
  height: unset;
  width: 80px;
  margin-top: -80px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: -290px;
  }
`;

export const DressCodeBorderRightImage = styled(RightImage)`
  height: unset;
  width: 70px;
  margin-top: 66px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: 50px;
  }
`;

export const DressCodeUnderline = styled.img`
  width: 150px;

  @media (min-width: 1025px) {
    width: 300px;
  }
`
