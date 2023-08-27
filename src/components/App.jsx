import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';



export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: ''
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
  
  
   handleFilterChange = event => {
    this.setState({ filter: event.target.value });
   };
  
   getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
    render() {
      const { name, number } = this.state;
      const filteredContacts = this.getFilteredContacts();

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
        <p>Find contacts by name</p>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }

}
