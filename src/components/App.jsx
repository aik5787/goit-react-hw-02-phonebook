import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';



export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };


   handleNameChange = event => {
    this.setState({ name: event.target.value });
   };
  
    handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  
   handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
   };
  
    render() {
    const { contacts, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }

}
