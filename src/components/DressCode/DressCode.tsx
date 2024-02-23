import React, { FC } from 'react';
import {
  DressCodeBorderLeftImage,
  DressCodeBorderRightImage,
  DressCodeContainer,
  DressCodeImage,
  DressCodeTitle,
  DressCodeUnderline,
  DressCodeWrapper,
} from './DressCode.styled';
import { border5Left, border5Right, brideGroom, underLine2 } from '../../assets/img';

interface DressCodeProps {}

const DressCode: FC<DressCodeProps> = () => (
  <DressCodeWrapper>
    <DressCodeBorderLeftImage src={border5Left} />
    <DressCodeBorderRightImage src={border5Right} />
    <DressCodeContainer>
      <DressCodeImage src={brideGroom} />
      <DressCodeTitle>Vestimenta Formal</DressCodeTitle>
      <DressCodeUnderline src={underLine2} />
    </DressCodeContainer>
  </DressCodeWrapper>
);

export default DressCode;
