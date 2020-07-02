import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';
import { CSSTransition } from 'react-transition-group';

const ContactFilter = ({ filterContact, contacts, filter }) => (
  <>
    <CSSTransition
      in={contacts.length >= 2}
      timeout={250}
      classNames="filter"
      unmountOnExit
    >
      <div className="contact-filter">
        <label>
          Find Contacts by Name
          <input
            name="filter"
            type="text"
            value={filter}
            onChange={filterContact}
            placeholder="Type to filter contact..."
          />
        </label>
      </div>
    </CSSTransition>
  </>
);

ContactFilter.propType = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};
export default ContactFilter;
