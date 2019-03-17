import React from 'react';
import ContactForm from './ContactForm';
import Button from './UI/Button';
import Modal from './UI/Modal';

interface ContactMeProps {}

interface ContactMeState {
  isModalActive: boolean;
  formComplete: boolean;
}

class ContactMe extends React.Component<ContactMeProps, ContactMeState> {
  constructor(props: ContactMeProps) {
    super(props);
    this.state = {
      isModalActive: false,
      formComplete: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <Modal isActive={this.state.isModalActive} onClose={() => this.setState({ isModalActive: false })}>
          <ContactForm />
        </Modal>
        <Button text="Want to get in touch?" onClick={() => this.setState({ isModalActive: true })} />
      </React.Fragment>
    );
  }
}

export default ContactMe;
