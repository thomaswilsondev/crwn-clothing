import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //find fetch off set up current User
  useEffect(() => {
    // listener auth state changed wasn't be login ?
    const unsubscribe = onAuthStateChangedListener((user) => {
      // user exit then create User Document
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // next step is set value currrent User
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
