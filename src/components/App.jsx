import { Form } from '../components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
