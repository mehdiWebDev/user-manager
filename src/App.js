import Form from "./components/form-component/Form";
import { useState } from "react";
import User from "./components/user-component/User";
function App() {
  const [users , setUsers] = useState([])


  const addUser =(user)=>{
    //addUser
    setUsers ( (prevUsers) =>{
      return [  user,...prevUsers ]
    } )
  }

  return (
    <div className="App">
      <Form addUser ={addUser} />

      {
        users.map( (user,i) =>{
          return <User key={i} user={user.username} age ={user.age}  />
        }  )
      }


    </div>
  );
}

export default App;
