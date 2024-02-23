import styled from 'styled-components';
import {
  JosefinSansParagraph,
  JosefinSlabParagraph,
  LeftImage,
  RightImage,
  StyledTitle,
} from '../shared/shared.styled';

export const GiftRequestWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const GiftImage = styled.img`
  height: 50px;

  @media (min-width: 1025px) {
    height: 80px;
  }
`;

export const GiftBorderLeftImage = styled(LeftImage)`
  height: unset;
  width: 100px;
  margin-top: -395px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: -350px;
  }
`;

export const GiftBorderRightImage = styled(RightImage)`
  height: unset;
  width: 80px;
  margin-top: -490px;

  @media (min-width: 1025px) {
    width: 190px;
    margin-top: -540px;
  }
`;

export const GiftTitle = styled(StyledTitle)`
  font-size: 2rem;
  z-index: 5;
  @media (min-width: 1025px) {
    font-size: 4rem;
  }
`;

export const GiftMessage = styled(JosefinSlabParagraph)`
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
  width: 80%;
  @media (min-width: 1025px) {
    font-size: 1.5rem;
    margin-top: 40px;
  }
`;

export const GiftTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

export const GiftTableRow = styled.div`
  background-color: #103a2c;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 275px;

  @media (min-width: 1025px) {
    width: 85%;
    height: unset;
    margin: auto;
    border-bottom: none;
    flex-direction: row;
    &:last-child {
      border-bottom: 1px solid #ddd;
    }
  }
`;

export const GiftTableCell = styled.div`
  flex: 1;
  padding: 5px;
  border: 1px solid #ddd;
  text-align: left;

  @media (min-width: 1025px) {
    padding: 8px 16px;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
`;

export const GiftHeaderCell = styled(GiftTableCell)`
  font-weight: bold;
`;

export const GiftDataCell = styled(GiftTableCell)`
  text-align: center;
`;

export const GiftRequestQrCode = styled.img`
  height: 50px;
  object-fit: contain;
`;

export const GiftTableAccountNumber = styled(JosefinSansParagraph)`
  font-size: 0.75rem;
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;

export const GiftTableAccountName = styled(JosefinSansParagraph)`
  font-weight: bold;
  font-size: 0.75rem;
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;