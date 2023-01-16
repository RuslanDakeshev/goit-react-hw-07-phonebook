import PropTypes from 'prop-types';
import {
  Btn,
  Contacts,
  ContactsItem,
  Name,
  Number,
} from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts,fetchContacts } from 'redux/contacts/contacts-operations';
import { useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contacts-selector';
import { selectFilter } from 'redux/filter/filter-selector';
import { useEffect } from 'react';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    
    <Contacts>
      {isLoading && <h1>LOADING...</h1>}
      {filteredContacts.map(({ name, phone, id }) => (
        
        <ContactsItem key={id}>
          <Name>{name}</Name>
          <Number>{phone}</Number>
          <Btn type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Btn>
        </ContactsItem>
      ))}
      {error && <p>{error.message }</p>}
    </Contacts>
  );
};


// import PropTypes from 'prop-types';
// import {
//   Btn,
//   Contacts,
//   ContactsItem,
//   Name,
//   Number,
// } from './ContactList.styled';
// import { useDispatch } from 'react-redux';
// // import { deleteContact } from 'redux/contacts/contactsSlice';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selector';
// import { getFilterValue } from 'redux/filter/filter-selector';
// import { fetchContacts,deleteContacts } from 'redux/contacts/contacts-operations';
// import { useEffect } from 'react';


// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilterValue);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const filteredContacts = contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter)
//   );

//   // const showUsersList = () => {
    
//   //   dispatch(fetchContacts())
//   // }

//   return (

// //     <ul>
      
// //       {
// //         contacts.map(({ id, name, phone }) => (
// //           <li key={id}>
// //             <p>Name: {name}</p>
// //             <p>Number: {phone}</p>
// //           </li>
// //         ))
// // }


// //      </ul>
    
//     <Contacts>
//       {filteredContacts.map(({ name, number, id }) => (
        
//         <ContactsItem key={id}> 
//           <Name>{name}</Name>
//           <Number>{number}</Number>
//           <Btn type="button" onClick={() => dispatch(deleteContacts(id))}>
//             Delete
//           </Btn>
//         </ContactsItem>
//       ))}
//     </Contacts>
//   );
// };

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
