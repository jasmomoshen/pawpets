import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Authentication from './components/authentication/Authentication';
import Homepage from './Homepage';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loginUser, setLoading } from './features/userSlice';

// import Header from './components/map_feature/Header/Header';
// import List from './components/map_feature/List/List';
// import Map from './components/map_feature/Map/Map';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("user is not logged in");
      }
    })
  }, []);

  const user = useSelector((state) => state.data.user.user);

  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentication />}</>
      )}
    </div>
  );
}
export default App;
