import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {name, email} from "../redux/actions/userActions"

const App = () => {

  // const dispatch = useDispatch()
  // const userName = useSelector(state => state.name)
  // const userEmail = useSelector(state => state.email)

  // function handelEmail(e){
  //   dispatch(email(e.target.value))
  // }

  // function handelName(e){
  //   dispatch(name(e.target.value))
  // }

  

  // return (
  //    <div>
  //       <h1>User Information</h1>
  //       <p>
  //          <label htmlFor="name">Name: </label>
  //          <input onChange={handelName} type="text" id="name" />
  //       </p>
  //       <p>
  //          <label htmlFor="email">Email: </label>
  //          <input onChange={handelEmail} type="email" id="email" />
  //       </p>
  //       <p>Current values in store:</p>
  //       <div className="output">
  //          <p>Name : {userName}</p>
  //          <p>Email : {userEmail}</p>
  //       </div>
  //    </div>
  // );


  let userName = useSelector((state) => state.name);
  let userEmail = useSelector((state) => state.email);
  //console.log('app',typeof name);

  let dispatch = useDispatch();
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");

  useEffect(() => {
     dispatch(name(Name));
     dispatch(email(Email));
  }, [Name, Email]);

  return (
     <div>
        {/* Do not remove the main div */}
        <h1>User Information</h1>
        <label htmlFor="name">Name:</label>
        <input
           onChange={(e) => setName(e.target.value)}
           placeholder="enter the name"
           type="text"
           id="name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
           onChange={(e) => setEmail(e.target.value)}
           placeholder="enter the email"
           type="email"
           id="email"
        />
        <p>Current values in store:</p>
        <div className="output">
           <p>Name - {userName}</p>
           <p>Email - {userEmail}</p>
        </div>
     </div>
  );


}

export default App