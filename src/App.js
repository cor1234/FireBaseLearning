// import {getDatabase, ref, set} from "firebase/database";
import React,{useEffect,useState} from 'react';
import {app} from "./firebase";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { getFirestore,collection, addDoc , doc, getDoc,query,where,getDocs,updateDoc} from "firebase/firestore";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
//const db=getDatabase(app);
const auth=getAuth(app);
const firestore = getFirestore(app);
//import './App.css';

function App() {
   const [user,setUser]=useState(null);
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user);
      }else{
         console.log("you are logged out");
         setUser(null);
      }
    })
   },[])
  // const putData=()=>{
  //   set(ref(db,'users/rohan'),{
  //     id:1,
  //     name: 'rohan khon',
  //     age:21,
  //   })
  // }
  // const signupUser=()=>{
  //   createUserWithEmailAndPassword(auth,"rohan2019.rk@gmail.com","Rohandbg@2022").then((value)=>console.log(value));
  // }
  if(user==null){
    return(
      <div className="App">
        <SignupPage/>
          <SigninPage/>
      </div>
    )
  }

  const writeData= async ()=>{
    const result=await addDoc(collection(firestore,"cities"),{
      name:"Delhi",
      pinCode:2134,
      lat:123,
      long:456,
    });
    console.log("Result",result);
  }
  const makeSubCollection=async ()=>{
   await addDoc(collection(firestore,"cities/495nPxESluaD8wedZnJ7/places"),{
    name:"Thsi a place 2",
    desc:"Asybc lms;",
    date: Date.now(),
   })
  } 
  const getDocument=async ()=>{
    const ref=doc(firestore,"cities","495nPxESluaD8wedZnJ7");
    const snap=await getDoc(ref);
    console.log(snap.data());
  }
  const getDocumentByQuery=async ()=>{
   const collectionRef=collection(firestore,"users");
   const q=query(collectionRef, where("isMale","==",true));
   const snapShot=await getDocs(q);
   snapShot.forEach((data)=>console.log(data.data()));
  }
  const update=async ()=>{
    const docRef=doc(firestore,"cities","495nPxESluaD8wedZnJ7");
    await updateDoc(docRef, {
      name:"New Delhi"
    })
  }
  return (
    <div className="App">
     {/* <h1>Firebase</h1> */}
  {/* //   <button onClick={putData}>putData</button> */}
  {/* <button onClick={signupUser}>Sign Up</button> */}
  {/* <SignupPage/>
  <SigninPage/> */}
  <h1>Hello {user.email}</h1>
  <button onClick={()=>signOut(auth)}>Logout</button>
  <button onClick={()=>writeData()}>putData</button>
  <button onClick={()=>makeSubCollection()}>putsubData</button>
  <button onClick={()=>getDocument()}>getubData</button>
  <button onClick={()=>getDocumentByQuery()}>getDocumentByQuery</button>
  <button onClick={()=>update()}>udateqe</button>
    </div>
  );
}

export default App;
