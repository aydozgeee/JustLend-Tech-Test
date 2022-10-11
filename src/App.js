import logo from './logo.svg';
import './style/App.css';
import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import Home from './components/Home.js';
function App() {
  let [user, setSelectedUser] = useState(null);
  let [hideComponent, setHideComponent] = useState('');
  useEffect(() => {

    if (user != null) {
      setHideComponent('none');

    }
    else {
      setHideComponent('');
    }

  }, [user])

  return (
    <>
      <div className='App' style={{ display: hideComponent, overflow: "hidden" }} >
        <LoginPage
          setSelectedUser={(value) => {
            setSelectedUser(value)
          }}>

        </LoginPage>


      </div>
      {user != null && <Home></Home>}

    </>

  );
}

export default App;
