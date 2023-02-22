import { AppStyled } from './App.styled';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactsList from '../ContactsList';


const App = () => {

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </AppStyled>
  );
};

export default App;
