import PropTypes from 'prop-types';
import {
  Btn,
  Contacts,
  ContactsItem,
  Name,
  Number,
} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilterValue } from 'redux/filter/filter-selector';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    
    <Contacts>
      {filteredContacts.map(({ name, number, id }) => (
        
        <ContactsItem key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};
