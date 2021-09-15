import './App.css';

//components
import Header from './components/Header'
import Profile from './components/Profile'
import UserList from './components/UserList'

//context
import UserState from './context/User/UserState'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <Header />
      <div className="container p-4 bg-light">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>

  );
}

export default App;
