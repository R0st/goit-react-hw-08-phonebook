import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, filterContact } from '../../redux/contacts';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <div className={styles.filter}>
      <p className={styles.label}>Фильтр по содержимому</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </div>
  );
}
