import React, { FC } from 'react';
import { HeaderCenterImage, HeaderWrapper, HeaderLeftBorderImage, HeaderRightBorderImage } from './Header.styled';
import { border1Left, border1Right, header } from '../../assets/img';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <HeaderWrapper>
    <HeaderLeftBorderImage src={border1Left} />
    <HeaderCenterImage src={header} />
    <HeaderRightBorderImage src={border1Right} />
  </HeaderWrapper>
);

export default Header;
