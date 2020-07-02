import { connect } from 'react-redux';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import { filter } from '../actions';

const mapDispatchToProps = dispatch => ({
  filterContact: ({ target: { value } }) => dispatch(filter(value)),
});

const mapStateToProps = ({ contacts, contactsFilter }) => ({
  contacts: contacts,
  filter: contactsFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
