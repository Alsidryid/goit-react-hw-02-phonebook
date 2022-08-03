import React from 'react';
import { nanoid } from 'nanoid';
import FormContacts from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { FilterList } from './FilterList/FilterList';

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    
    this.setState(({contacts}) => {
      if(contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())){
        return alert(`${name} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      }
    })
  }

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  currentContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


render(){
  return(<>
  <h1>Phonebook</h1>
<FormContacts onSubmit={this.addContact}/>
<h2>Contacts</h2>
<FilterList filter={this.state.filter} onChange={this.onChangeFilter}/>
<ListContacts contacts={this.currentContacts()}
              deleteContact={this.deleteContact}/>
</>
  )


}

}

export default App;