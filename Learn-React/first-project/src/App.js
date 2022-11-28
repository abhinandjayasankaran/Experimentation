import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import {useState} from 'react';

const DUMMY_DATA = [
  {
    id: "1",
    name: "John",
    age: 28,
  },
  {
    id: "2",
    name: "Jane",
    age: 29,
  },
  {
    id: "3",
    name: "Jack",
    age: 30,
  },
];

function App() {

  const [users, setUsers] = useState(DUMMY_DATA);

  function addUserHandler(user){
    setUsers((prevUser)=>{
      return [user, ...prevUser];
    })
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "rgba(255,255,255,1)" , marginBottom: '3rem'}}>
        My First React Project
      </h1>
      <UserForm addUser={addUserHandler} />
      <div style={{marginBottom: '5rem'}}></div>
      <UserList data={users} />
    </div>
  );
}

export default App;
