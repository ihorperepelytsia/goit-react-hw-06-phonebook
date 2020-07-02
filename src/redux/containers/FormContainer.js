import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import { addContact } from '../actions';

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
