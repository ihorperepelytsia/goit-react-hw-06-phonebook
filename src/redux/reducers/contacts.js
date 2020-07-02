import { CONTACT_ADD, CONTACT_DELETE, GET_CONTACTS } from '../actions/index';

const contacts = (state = [], { type, id, number, name, contacts }) => {
  switch (type) {
    case CONTACT_ADD:
      return [
        ...state,
        {
          id,
          number,
          name,
        },
      ];

    case CONTACT_DELETE:
      return state.filter(contact => contact.id !== id);

    case GET_CONTACTS:
      return [...contacts];

    default:
      return state;
  }
};

export default contacts;
