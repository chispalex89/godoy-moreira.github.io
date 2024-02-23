import styled from 'styled-components';
import { Image, LeftImage, RightImage } from '../shared/shared.styled';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

export const HeaderLeftBorderImage = styled(LeftImage)`
  @media (min-width: 1025px) {
    top: 25px;
  }
`;

export const HeaderRightBorderImage = styled(RightImage)`
  top: 11px;

  @media (min-width: 1025px) {
    top: 7px;
  }
`;

export const HeaderCenterImage = styled(Image)`
  @media (min-width: 1025px) {
    top: 10px;
  }
`;
