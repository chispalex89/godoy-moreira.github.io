import React, { FC } from 'react';
import { InvitationContainer, InvitationWrapper } from './Invitation.styled';
import Header from '../Header/Header';
import Greeting from '../Greeting/Greeting';
import DateAndPlace from '../DateAndPlace/DateAndPlace';
import Countdown from '../Countdown/Countdown';
import Schedule from '../Schedule/Schedule';
import DressCode from '../DressCode/DressCode';
import GiftRequest from '../GiftRequest/GiftRequest';
import Confirmation from '../Confirmation/Confirmation';

interface InvitationProps {}

const Invitation: FC<InvitationProps> = () => (
  <InvitationWrapper>
    <InvitationContainer>
      <Header />
      <Greeting />
      <DateAndPlace />
      <Countdown />
      <Schedule />
      <DressCode />
      <GiftRequest />
    </InvitationContainer>
    <Confirmation />
  </InvitationWrapper>
);

export default Invitation;
