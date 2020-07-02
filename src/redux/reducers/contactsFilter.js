import { CONTACT_FILTER } from '../actions';

const contactsFilter = (state = '', { type, filter }) => {
  switch (type) {
    case CONTACT_FILTER:
      return filter;

    default:
      return state;
  }
};

export default contactsFilter;
