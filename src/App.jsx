// import { getDatabase, ref, set } from "firebase/database"

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "./firebase"

// const db = getDatabase(app);

const auth = getAuth(app);

function App() {

  // const putData = () => {
  //   set(ref(db, 'users/'), {
  //     id : 1,
  //     name: "Stack",
  //     age : 20,
  //   })
  // }

  const sigupUser = () => {
    createUserWithEmailAndPassword(auth, 'stack@gmail.com', 'stack1234')
      .then((res) => console.log(res)).catch((err) => console.log(err));
  }

  return (
    <>
     <div className="App">
      <h1>Firebase App</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      <button onClick={sigupUser}>Create User</button>
     </div>
    </>
  )
}

export default App
