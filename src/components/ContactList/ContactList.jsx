import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './contactList.scss';

const ContactList = ({ contacts, deleteContact, filter }) => (
  <TransitionGroup component="ul">
    {contacts.map(({ id, name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ? (
        <CSSTransition key={id} timeout={250} classNames="list" unmountOnExit>
          <li className="user">
            <p className="user-name">{name}</p>
            <p className="user-number">{number}</p>
            <button name={id} onClick={deleteContact}>
              X
            </button>
          </li>
        </CSSTransition>
      ) : null,
    )}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default ContactList;
