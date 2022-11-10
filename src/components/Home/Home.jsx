import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import Baner from "../Baner/Baner";
import { auth, db } from '../../firebaseConfigs/firebaseConfigs'
import { collection, getDocs, query, where } from "firebase/firestore";
import { async } from "@firebase/util";

const Home = () => {

  function GetCurrentUser() {
    const [user, setUser] = useState(" ")
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
      auth.onAuthStateChanged(
        userlogged => {
          if (userlogged) {
            const getUsers = async () => {
              const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
              // console.log(q);
              const data = await getDocs(q);
              setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }
            getUsers();
          }
          else {
            setUser(null);
          }
        })
    }, [])
    return user
  }
  const loggeduser = GetCurrentUser();

  if (loggeduser) { console.log(loggeduser[0]); }

  return (
    <div>
      <Navbar />
      <Baner />
      <Product />
    </div>
  )
};

export default Home;
