import './App.css';
import {useDispatch} from "react-redux"
import {useSelector} from 'react-redux'
import{login} from '../src/features/user'
import{logout} from '../src/features/user'

function App() {
  const dispatch=useDispatch()
  const user= useSelector((state)=> state.user.value)

  return (
    <div className="App">
      <button onClick={()=>dispatch(login({ first_name:"achiya",last_name:"avrahamof",email:"achiyaav001@gmail.com"}))}>login</button>
      <button onClick={()=>dispatch(logout())}>logout</button>

      <h1>{user.email}</h1>
    </div>
  );
}

export default App;
