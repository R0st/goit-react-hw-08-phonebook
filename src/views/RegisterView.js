import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from '../redux/auth';
import styles from './Views.module.css';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Страница регистрации</h1>

            <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
                <label className={styles.label}>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                </label>

                <label className={styles.label}>
                    Почта
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label className={styles.label}>
                    
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
            <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
        );
  }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);