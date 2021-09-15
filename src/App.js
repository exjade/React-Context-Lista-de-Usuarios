import './App.css';

//components
import Profile from './components/Profile'
import UserList from './components/UserList'

//context
import UserState from './context/User/UserState'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <UserState>
      <UserList />
      <Profile />
    </UserState>

  );
}

export default App;
