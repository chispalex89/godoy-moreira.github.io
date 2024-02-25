import { Guest } from '../interfaces'

export const convertJsonToGuest = (json: any): Guest => {
  return {
    invitationId: json.invitation_id,
    invitationName: json.invitation_name,
    invitedGuests: json.invited_guests,
    invitedGuestsNames: json.invited_guests_names,
  };
};

export const getArrayFromNumber = (num: number): number[] => {
  return Array.from(Array(num).keys());
};
