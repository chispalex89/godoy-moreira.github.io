import React, { FC, useEffect, useState } from 'react';
import { ConfirmationViewerWrapper } from './ConfirmationViewer.styled';
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  collection,
} from 'firebase/firestore';
import { firestore } from '../../firebase';

interface ConfirmationViewerProps {}
interface IConfirmation {
  invitationId: string;
  name: string;
  numberOfPeople: number;
  guestsNames: string[];
}

const ConfirmationViewer: FC<ConfirmationViewerProps> = () => {
  const [confirmations, setConfirmations] = useState<IConfirmation[]>([]);
  const [totalPeople, setTotalPeople] = useState(0);

  useEffect(() => {
    const fetchConfirmations = async () => {
      const invitation = await getDocs(
        query(collection(firestore, 'confirmations'))
      );

      setConfirmations(invitation.docs.map((doc) => {
        const data = doc.data();
        return {
          invitationId: doc.id,
          name: data.name,
          numberOfPeople: data.numberOfPeople,
          guestsNames: data.guestsNames,
        } as IConfirmation;
      }));
    };

    fetchConfirmations();
  }, []);

  useEffect(() => {
    setTotalPeople(confirmations.reduce((acc, curr) => acc + curr.numberOfPeople, 0));
  }, [confirmations]);

  return (
    <ConfirmationViewerWrapper>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Invitation ID</th>
            <th>Name</th>
            <th>Number of People</th>
            <th>Guests Names</th>
          </tr>
        </thead>
        <tbody>
          {confirmations.map((confirmation, i) => (
            <tr key={confirmation.invitationId}>
              <td>{i}</td>
              <td>{confirmation.invitationId}</td>
              <td>{confirmation.name}</td>
              <td>{confirmation.numberOfPeople}</td>
              <td>{confirmation.guestsNames?.join(', ')}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} style={{textAlign: 'center'}}>Total</td>
            <td>{totalPeople}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </ConfirmationViewerWrapper>
  );
};

export default ConfirmationViewer;
