import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { email, name } from "../redux/actions/userActions";

const App = () => {

  const dispatch = useDispatch()
  const userName = useSelector(state => state.name)
  const userEmail = useSelector(state => state.email)

  function handelEmail(e){
    dispatch(email(e.target.value))
  }

  function handelName(e){
    dispatch(name(e.target.value))
  }
  

  return (
     <div>
        <h1>User Information</h1>
        <p>
           <label htmlFor="name">Name: </label>
           <input onChange={handelName} type="text" id="name" />
        </p>
        <p>
           <label htmlFor="email">Email: </label>
           <input onChange={handelEmail} type="email" id="email" />
        </p>
        <p>Current values in store:</p>
        <div className="output">
           <p>Name : {userName}</p>
           <p>Email : {userEmail}</p>
        </div>
     </div>
  );
}

export default App