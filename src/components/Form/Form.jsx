import { useState } from 'react';


import { Wrapper, Label, Input, Btn, Container } from './Form.styled';
import { addContacts } from 'redux/contacts/contacts-operations';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';



export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

    
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

const isExist = contacts.find(
      contacts  => contacts.name.toLowerCase() === name.toLowerCase()
    );
    
    if (isExist) {
       alert(`${name} is already in contacts.`);
      resetForm()
      return
    }

    const contact = { name, number };
    dispatch(addContacts(contact));

    // onSubmit({ name, number })
    resetForm()
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Wrapper>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
      </Wrapper>

      <Wrapper>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </Wrapper>

      <Btn onClick={e => e.target.blur()}>Add contact</Btn>
    </Container>
  );
};



export default Form;
