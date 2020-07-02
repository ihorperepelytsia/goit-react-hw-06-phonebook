import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './animationTransition.scss';
import Form from '../../redux/containers/FormContainer';
import ContactList from '../../redux/containers/ContactListContainer';
import ContactFilter from '../../redux/containers/FilterContainer';
import Alert from '../Alert/Alert';

export default class App extends Component {
  state = {
    isLoadingPage: false,
    alertText: '',
    alertLoading: false,
  };

  updateAlertText = (value, bool) => {
    this.setState({ alertText: value, alertLoading: bool });
  };

  componentDidMount() {
    this.setState({
      isLoadingPage: true,
    });
    const { addContacts } = this.props;
    const getLocalStorageContacts = localStorage.getItem('Contacts');
    if (getLocalStorageContacts) {
      addContacts(JSON.parse(getLocalStorageContacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('Contacts', JSON.stringify(contacts));
    }

    if (prevState.alertLoading !== this.state.alertLoading) {
      setTimeout(() => this.setState({ alertLoading: false }), 2500);
    }
  }

  render() {
    const { isLoadingPage, alertText, alertLoading } = this.state;

    return (
      <>
        <div className="box">
          <CSSTransition
            in={isLoadingPage}
            timeout={1250}
            classNames="headline"
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>

          <CSSTransition
            in={alertLoading}
            timeout={1250}
            classNames="alertAnimation"
            unmountOnExit
          >
            <Alert text={alertText} />
          </CSSTransition>
        </div>
        <Form updateAlertText={this.updateAlertText} />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </>
    );
  }
}
