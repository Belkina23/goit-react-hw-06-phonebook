import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

const shortid = require('shortid');
const inputNameId = shortid.generate();
const inputNumberId = shortid.generate();
const buttonId = shortid.generate();

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = e => {
    setName(e.currentTarget.value);
  };

  const changeNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handelSubmit}>
      <label htmlFor={inputNameId}>
        <span>Name</span>
      </label>
      <Input
        autoComplete="off"
        type="text"
        name="name"
        id={inputNameId}
        value={name}
        onChange={changeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={inputNumberId}>
        <span>Number</span>
      </label>
      <Input
        type="tel"
        name="number"
        id={inputNumberId}
        value={number}
        onChange={changeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <label htmlFor={buttonId}>
        <Button type="submit" id={buttonId}>
          Add contact
        </Button>
      </label>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
