import React, { FC, useState } from 'react';
import {
  ConfirmationBorderBottomLeftImage,
  ConfirmationBorderBottomRightImage,
  ConfirmationBorderTopLeftImage,
  ConfirmationBorderTopRightImage,
  ConfirmationButton,
  ConfirmationContainer,
  ConfirmationImage,
  ConfirmationLogo,
  ConfirmationMessage,
  ConfirmationPikachuImage,
  ConfirmationTitle,
  ConfirmationWrapper,
} from './Confirmation.styled';
import { border7Left, border7Right, border8Left, border8Right, invitation, logo, wedPikachus } from '../../assets/img';
import ConfirmationForm from '../Confirmation-Form/Confirmation-Form';

interface ConfirmationProps {}

const Confirmation: FC<ConfirmationProps> = () => {
  const [pressed, setPressed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      setShowForm(true);
    }, 100);
  };

  const handleCancel = () => {
    setShowForm(false);
  }
  return (
    <ConfirmationWrapper>
      <ConfirmationContainer>
        <ConfirmationBorderTopLeftImage src={border7Left} />
        <ConfirmationBorderTopRightImage src={border7Right} />
        <ConfirmationImage src={invitation} />
        <ConfirmationMessage>
          Nos encantaría verte en nuestra boda y crear juntos recuerdos
          inolvidables. Queremos que disfrutes de esta celebración tanto como
          nosotros, por eso hemos decidido no incluir a niños.
        </ConfirmationMessage>
        <ConfirmationTitle>¡Confirma tu asistencia!</ConfirmationTitle>
        <ConfirmationMessage>
          <small>
            Recuerda que la confirmación de asistencia es importante para que
            podamos planificar con anticipación y así garantizar que todo salga
            a la perfección, pues cada lugar tiene un costo monetario.
            Lastimosamente, si no confirmas tu asistencia, no podremos asegurar
            tu lugar.
          </small>
        </ConfirmationMessage>
        {!showForm && <ConfirmationButton onClick={handleClick} pressed={pressed}>
          Confirma aquí
        </ConfirmationButton>}
        {showForm && <ConfirmationForm onCancel={handleCancel} />}
        <ConfirmationPikachuImage src={wedPikachus} />
        <ConfirmationMessage>
          ¡Gracias por formar parte de este día tan especial!
        </ConfirmationMessage>
        <ConfirmationLogo src={logo} />
        <ConfirmationBorderBottomLeftImage src={border8Left} />
        <ConfirmationBorderBottomRightImage src={border8Right} />
      </ConfirmationContainer>
    </ConfirmationWrapper>
  );
};

export default Confirmation;
