import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
const App = () => {
  const dispatch = useDispatch();
  //find fetch off set up current User
  useEffect(() => {
    // Listen to the auth state change using the onAuthStateChangedListener function
    const unsubscribe = onAuthStateChangedListener((user) => {
      // If the user is logged in, create a new user document using the createUserDocumentFromAuth function
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // Update the currentUser value using the setCurrentUser function
      dispatch(setCurrentUser(user));
    });
    // Return the unsubscribe function to remove the listener on component unmount
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
export default App;
