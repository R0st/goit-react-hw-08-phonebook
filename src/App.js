// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './component/AppBar/AppBar';
// import ContactsView from './views/ContactsView';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Container from './component/Container'
// import { authOperations } from './redux/auth';
// // import './App.css'

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       <AppBar />

//       <Switch>
//         <Route exact path="/" component={HomeView} />
//         <Route path="/register" component={RegisterView} />
//         <Route path="/login" component={LoginView} />
//         <Route path="/contacts" component={ContactsView} />
//       </Switch>
//     </Container>
//   );
// }

import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch} from 'react-router-dom';
import AppBar from './component/AppBar/AppBar';
import Container from './component/Container';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log(isFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    
    !isFetchingCurrentUser && 
        <Container>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
               <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
    </Container>
  );
}

