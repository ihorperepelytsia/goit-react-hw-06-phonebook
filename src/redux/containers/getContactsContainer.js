import { connect } from 'react-redux';
import App from '../../components/App/App';
import { getContacts } from '../actions';

const mapDispatchToProps = dispatch => ({
  addContacts: contacts => dispatch(getContacts(contacts)),
});

const mapStateToProps = ({contacts}) => ({
  contacts: contacts,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
