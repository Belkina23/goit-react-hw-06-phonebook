import { useState, useEffect } from 'react';
import { AppStyled } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

const shortid = require('shortid');

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const addContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    setContacts(prevState => [addContact, ...prevState]);
    return true;
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChengeFilter={changeFilter} />
      <ContactsList contacts={visibleContacts} deleteContact={deleteContact} />
    </AppStyled>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('my-contacts'));
//     if (contacts && contacts.length) {
//       this.setState({ contacts });
//     }
//   }

//   componentDidUpdate(prevPros, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('my-contacts', JSON.stringify(contacts));
//     }
//   }

//   onSubmitHendler = data => {
//     const contact = {
//       id: contactId,
//       name: data.name,
//       number: data.number,
//     };
// contact.id = shortid.generate();
//     const contactName = [];

//     for (const contact of this.state.contacts) {
//       contactName.push(contact.name);
//     }

//     if (contactName.includes(contact.name)) {
//       alert(`${contact.name} is already in contacts list`);
//      return true;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contact],
//     }));
//     return false;
//   };

//   filterName = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   delete = contactId => {

//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contactId !== contact.id),
//     }));
//   };

//   render() {
//     const filterNormilized = this.state.filter.toLowerCase().trim();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterNormilized)
//     );

//     return (
//       <AppStyled>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmitForm={this.onSubmitHendler} />
//         <Filter value={this.state.filter} onChengeFilter={this.filterName} />
//         <ContactsList contacts={visibleContacts} deleteContact={this.delete} />
//       </AppStyled>
//     );
//   }
// }

export default App;
