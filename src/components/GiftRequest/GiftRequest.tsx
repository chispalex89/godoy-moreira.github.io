import React, { FC } from 'react';
import {
  GiftBorderLeftImage,
  GiftBorderRightImage,
  GiftDataCell,
  GiftHeaderCell,
  GiftImage,
  GiftMessage,
  GiftRequestQrCode,
  GiftRequestWrapper,
  GiftTableAccountName,
  GiftTableAccountNumber,
  GiftTableContainer,
  GiftTableRow,
  GiftTitle,
} from './GiftRequest.styled';
import { border6Left, border6Right, gift, qrCode } from '../../assets/img';

interface GiftRequestProps {}

const GiftRequest: FC<GiftRequestProps> = () => (
  <GiftRequestWrapper>
    <GiftImage src={gift} />
    <GiftBorderLeftImage src={border6Left} />
    <GiftBorderRightImage src={border6Right} />
    <GiftTitle>Regalos</GiftTitle>
    <GiftMessage>
      Agradecidos con Dios, hemos vivido juntos y creado nuestro hogar en los
      últimos años. Por lo que te agradeceríamos pudieras apoyarnos
      económicamente en esta ocasión, depositando a cualquiera de las siguientes
      cuentas:
    </GiftMessage>
    <GiftTableContainer>
      <GiftTableRow>
        <GiftHeaderCell>
          <GiftTableAccountName>
            Pablo Godoy y/o
            <br />
            Andrea Moreira
            <br />
            G&T Continental
          </GiftTableAccountName>
        </GiftHeaderCell>
        <GiftHeaderCell>
          <GiftTableAccountName>
            Pablo Godoy
            <br />
            Banco Industrial
          </GiftTableAccountName>
        </GiftHeaderCell>
        <GiftHeaderCell>
          <GiftTableAccountName>
            Andrea Moreira
            <br />
            Banco de America Central (BAC)
          </GiftTableAccountName>
        </GiftHeaderCell>
      </GiftTableRow>
      <GiftTableRow>
        <GiftDataCell>
          <GiftTableAccountNumber>
            Cuenta de Ahorro:
            <br />
            04880268763
          </GiftTableAccountNumber>
        </GiftDataCell>
        <GiftDataCell>
          <GiftTableAccountNumber style={{ margin: 0 }}>
            Cuenta Monetaria:
            <br />
            185-001343-3
          </GiftTableAccountNumber>
          <GiftRequestQrCode src={qrCode} />
        </GiftDataCell>
        <GiftDataCell>
          <GiftTableAccountNumber>
            Cuenta Monetaria:
            <br />
            965343486
          </GiftTableAccountNumber>
        </GiftDataCell>
      </GiftTableRow>
    </GiftTableContainer>
  </GiftRequestWrapper>
);

export default GiftRequest;
