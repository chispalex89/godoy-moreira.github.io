import React, { FC, FormEvent, useEffect, useState } from 'react';
import {
  ConfirmationButtonContainer,
  ConfirmationCancelButton,
  ConfirmationCheckbox,
  ConfirmationFormCheckboxContainer,
  ConfirmationFormCheckboxLabel,
  ConfirmationFormInput,
  ConfirmationFormInputContainer,
  ConfirmationFormLabel,
  ConfirmationFormNamesContainer,
  ConfirmationFormSelect,
  ConfirmationFormSubmitButton,
  ConfirmationFormTitle,
  ConfirmationFormWrapper,
} from './Confirmation-Form.styled';
import { getArrayFromNumber } from '../../helpers';
import { Guest } from '../../interfaces';

interface ConfirmationFormState {
  name: string;
  numberOfPeople: number;
  guestsNames: string[];
}

interface ConfirmationFormProps {
  onCancel: () => void;
}

const ConfirmationForm: FC<ConfirmationFormProps> = ({onCancel}) => {
  const [state, setState] = useState<ConfirmationFormState>({
    name: '',
    numberOfPeople: 0,
    guestsNames: [],
  });

  const [submitPressed, setSubmitPressed] = useState(false);
  const [cancelPressed, setCancelPressed] = useState(false);

  const { numberOfPeople } = state;
  const guest: Guest = {
    invitationId: '1',
    invitationName: 'Juan Pérez y Familia',
    invitedGuests: 5,
    invitedGuestsNames: ['Juan', 'Pedro', 'Maria', 'Jose', 'Carlos'],
  };

  const handleOnChangeSelectedOption = (e: any) => {
    if (numberOfPeople > parseInt(e.target.value)) {
      setState({
        ...state,
        numberOfPeople: parseInt(e.target.value),
        guestsNames: [],
      });
    } else {
      setState({ ...state, numberOfPeople: parseInt(e.target.value) });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    setSubmitPressed(true);
    setTimeout(() => {
      setSubmitPressed(false);
      window.open('/confirmation', '_blank');
    }, 100);
    e.preventDefault();
    console.log(state);
    // Here you can handle the form submission. For example, send the data to a server.
  };

  const handleCancel = () => {
    setCancelPressed(true);
    onCancel();
    setTimeout(() => {
      setCancelPressed(false);
    }, 100);
  };

  return (
    <ConfirmationFormWrapper>
      <ConfirmationFormTitle>{guest.invitationName}</ConfirmationFormTitle>
      <ConfirmationFormInputContainer>
        <ConfirmationFormLabel htmlFor="guests">
          Tu invitación es para <b>{guest.invitedGuests}</b> personas.
          <br />
          ¿Cuántos invitados asistirán?
        </ConfirmationFormLabel>
        <ConfirmationFormSelect
          id="guests"
          name="numberOfPeople"
          value={numberOfPeople}
          onChange={handleOnChangeSelectedOption}
        >
          <option value={0} selected>
            0
          </option>
          {getArrayFromNumber(guest.invitedGuests).map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </ConfirmationFormSelect>
      </ConfirmationFormInputContainer>
      {numberOfPeople > 0 && numberOfPeople < guest.invitedGuests && (
        <ConfirmationFormInputContainer>
          <ConfirmationFormLabel htmlFor="guestsNames">
            Por favor selecciona los nombres de los invitados que asistirán
          </ConfirmationFormLabel>
          <ConfirmationFormNamesContainer>
            {guest.invitedGuestsNames.map((invitedGuestName, index) => (
              <ConfirmationFormCheckboxContainer>
                <ConfirmationFormCheckboxLabel
                  key={`label-${index}`}
                  htmlFor={`checkbox-${index}`}
                >
                  <ConfirmationCheckbox
                    key={`checkbox-${index}`}
                    name="invitedGuests"
                    checked={state.guestsNames.includes(invitedGuestName)}
                    value={invitedGuestName}
                    disabled={
                      state.guestsNames.length === numberOfPeople &&
                      !state.guestsNames.includes(invitedGuestName)
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setState({
                          ...state,
                          guestsNames: [...state.guestsNames, invitedGuestName],
                        });
                      } else {
                        setState({
                          ...state,
                          guestsNames: state.guestsNames.filter(
                            (guestName) => guestName !== invitedGuestName
                          ),
                        });
                      }
                    }}
                  />
                  <span>{invitedGuestName}</span>
                </ConfirmationFormCheckboxLabel>
              </ConfirmationFormCheckboxContainer>
            ))}
          </ConfirmationFormNamesContainer>
        </ConfirmationFormInputContainer>
      )}
      <ConfirmationButtonContainer>
        <ConfirmationFormSubmitButton
          onClick={handleSubmit}
          pressed={submitPressed}
        >
          Confirmar
        </ConfirmationFormSubmitButton>
        <ConfirmationCancelButton
          onClick={handleCancel}
          pressed={cancelPressed}
        >
          Cancelar
        </ConfirmationCancelButton>
      </ConfirmationButtonContainer>
    </ConfirmationFormWrapper>
  );
};

export default ConfirmationForm;
