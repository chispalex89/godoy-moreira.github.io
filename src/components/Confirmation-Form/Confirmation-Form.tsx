import React, { FC, FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  ConfirmationButtonContainer,
  ConfirmationCancelButton,
  ConfirmationCheckbox,
  ConfirmationFormCheckboxContainer,
  ConfirmationFormCheckboxLabel,
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

import { firestore } from '../../firebase';

interface ConfirmationFormProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const ConfirmationForm: FC<ConfirmationFormProps> = ({
  onCancel,
  onSubmit,
}) => {

  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [guestsNames, setGuestsNames] = useState<string[]>([]);
  const [submitPressed, setSubmitPressed] = useState(false);
  const [cancelPressed, setCancelPressed] = useState(false);
  const [guest, setGuest] = useState<Guest | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [searchParams] = useSearchParams();
  const invitationId = searchParams.get('invitationId');

  useEffect(() => {
    if (invitationId) {
      const fetchGuest = async () => {
        const invitation = await getDoc(
          doc(firestore, 'invitations', invitationId)
        );
        // Here you can fetch the guest data from the server
        if (invitation.exists()) {
          const data = invitation.data();
          setGuest({
            id: invitation.id,
            name: data.name,
            invitedGuests: Number(data.invitedGuests),
            invitedGuestsNames: data.invitedGuestsNames,
          } as Guest);
        }
      };

      fetchGuest();
    }
  }, [invitationId]);

  const handleOnChangeSelectedOption = (e: any) => {
    if (numberOfPeople > parseInt(e.target.value)) {
      setNumberOfPeople(parseInt(e.target.value));
      setGuestsNames([]);
    } else {
      setNumberOfPeople(parseInt(e.target.value));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    setSubmitPressed(true);
    setIsSaving(true);
    setTimeout(async () => {
      setSubmitPressed(false);
      const data = {
        invitationId: guest?.id,
        name: guest?.name,
        numberOfPeople: numberOfPeople,
        guestsNames: numberOfPeople !== guestsNames.length ? guest?.invitedGuestsNames : guestsNames,
      };

      try {
        await setDoc(
          doc(firestore, 'confirmations', invitationId as string),
          data
        );
        onSubmit();
      } catch (e) {
        console.error('Error adding document: ', e);
      } finally {
        setIsSaving(false);
      }
    }, 100);
    e.preventDefault();
  };

  const handleCancel = () => {
    setCancelPressed(true);
    onCancel();
    setTimeout(() => {
      setCancelPressed(false);
    }, 100);
  };

  return (
    guest && (
      <ConfirmationFormWrapper>
        <ConfirmationFormTitle>{guest.name}</ConfirmationFormTitle>
        <ConfirmationFormInputContainer>
          <ConfirmationFormLabel htmlFor="guests">
            Tu invitación es para <b>{guest.invitedGuests}</b>{' '}
            {guest.invitedGuests > 1 ? 'personas' : 'persona'}.
            <br />
            {guest.invitedGuests > 1 &&
              numberOfPeople < guest.invitedGuests && (
                <small>
                  ({guest.invitedGuestsNames.join(', ')})
                  <br />
                </small>
              )}
            ¿Cuántos invitados asistirán?
          </ConfirmationFormLabel>
          <ConfirmationFormSelect
            id="guests"
            name="numberOfPeople"
            value={numberOfPeople}
            onChange={handleOnChangeSelectedOption}
            defaultValue={0}
          >
            <option value={0}>0</option>
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
                      checked={guestsNames.includes(invitedGuestName)}
                      value={invitedGuestName}
                      disabled={
                        guestsNames.length === numberOfPeople &&
                        !guestsNames.includes(invitedGuestName)
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setGuestsNames([...guestsNames, invitedGuestName]);
                        } else {
                          setGuestsNames(
                            guestsNames.filter(
                              (guestName) => guestName !== invitedGuestName
                            )
                          );
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
            disabled={isSaving || (numberOfPeople > 0 && guestsNames.length !== numberOfPeople && numberOfPeople < guest.invitedGuests)}
            loading={isSaving}
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
    )
  );
};

export default ConfirmationForm;
