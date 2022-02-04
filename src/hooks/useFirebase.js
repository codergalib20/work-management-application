import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
// Call Initial Firebase
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  //   Create New Use with email password
  const newUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            swal("Success", "User Created Successfully", "success");
            onSubmit(email, name);
          })
          .catch((error) => {
            swal("Error", error.message, "error");
          });

        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  // Observed User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  //   Sign in with email password
  const signIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        swal("Success", "You are now logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  // Save new user in database_____________
  const onSubmit = (email, name) => {
    fetch("http://localhost:5000/create-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  // Sign Out User
  const logOut = () => {
    signOut(auth)
      .then(() => {
        swal("Success", "You are now logged out", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    newUser,
    logOut,
    isLoading,
    signIn,
  };
};

export default useFirebase;
