import styled from 'styled-components';

export const InvitationWrapper = styled.div`
  background-color: #f9f7ea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const InvitationContainer = styled.div`
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
