import { connect } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import { deleteContact } from '../actions';

const mapDispatchToProps = dispatch => ({
  deleteContact: ({ target: { name } }) => dispatch(deleteContact(name)),
});
const mapStateToProps = ({ contacts, contactsFilter }) => ({
  contacts: contacts,
  filter: contactsFilter,
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
