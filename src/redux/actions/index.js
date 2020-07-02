import { v4 } from 'uuid';

export const CONTACT_ADD = 'CONTACT_ADD';
export const CONTACT_DELETE = 'CONTACT_DELETE';
export const CONTACT_FILTER = 'CONTACT_FILTER';
export const GET_CONTACTS = 'GET_CONTACTS';

export const addContact = (name, number) => ({
  type: CONTACT_ADD,
  id: v4(),
  name,
  number,
});

export const deleteContact = id => ({
  type: CONTACT_DELETE,
  id,
});

export const filter = filter => ({
  type: CONTACT_FILTER,
  filter,
});

export const getContacts = contacts => ({
  type: GET_CONTACTS,
  contacts,
});
