import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  height: 300px;

  @media (min-width: 768px) {
    height: 400px;
  }
`

export const LeftImage = styled(Image)`
  left: 0;

  @media (min-width: 768px) {
    left: 25%;
  }
`;

export const RightImage = styled(Image)`
  right: 0;

  @media (min-width: 768px) {
    right: 25%;
  }
`;

export const JosefinSlabParagraph = styled.p`
  font-family: 'JosefinSlab';
  font-size: 1rem;
  text-align: center;
`;

export const JosefinSansParagraph = styled.p`
  font-family: 'JosefinSans';
  font-size: 1rem;
  text-align: center;
`;

export const JosefinItalicParagraph = styled.p`
  font-family: 'JosefinSlabItalic';
  font-size: 1rem;
  text-align: center;
`;

export const GreatVibesParagraph = styled.p`
  font-family: 'GreatVibes';
  font-size: 1rem;
  text-align: center;
  color: #715f07;
`;

export const StyledTitle = styled(GreatVibesParagraph)`
  font-size: 3rem;
  margin-top: 20px;
  z-index: 5;
  position: relative;
  text-align: center;
  width: 100%;
  margin-bottom: 0px;

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-top: 40px;
    margin-bottom: 10px;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
