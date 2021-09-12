import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../component/Container';
import ContactList from '../component/ContactList';
import Filter from '../component/Filter';
import ContactForm from '../component/ContactForm';
import { contactsOperations} from '../redux/contacts';


export default function ContactsView(params) {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => dispatch(contactsOperations.fetchContact()), [dispatch]);

  return (
    <Container>
      
      {/* {isLoadingContacts && <h1>Загружаем...</h1>} */}
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
