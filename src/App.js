import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Authentication from './components/authentication/Authentication';
import Homepage from './Homepage';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { loginUser, setLoading } from './features/userSlice';
import { UserProvider } from './contexts/UserContext';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const user = useSelector((state) => state.data.user.user);

  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <UserProvider>
      <div className="app">
        {isLoading ? (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        ) : (
          <>{user ? <Homepage /> : <Authentication />}</>
        )}
      </div>
    </UserProvider>
  );
}
export default App;
