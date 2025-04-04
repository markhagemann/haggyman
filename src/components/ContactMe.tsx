/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import ContactForm from './ContactForm';
import Button from './UI/Button';
import Modal from './UI/Modal';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
      formComplete: false,
    };
  }
  render(): JSX.Element {
    return (
      <>
        <Modal
          isActive={this.state.isModalActive}
          onClose={() => this.setState({ isModalActive: false })}
        >
          <ContactForm />
        </Modal>
        <Button
          centerOnPortrait={true}
          text="Want to get in touch?"
          onClick={() => this.setState({ isModalActive: true })}
        />
      </>
    );
  }
}

export default ContactMe;
