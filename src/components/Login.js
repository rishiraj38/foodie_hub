import React, { useState, useRef } from "react";
import GridMotion from "../ui/GridMotion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utlis/firebase";
import { addUser } from "../utlis/userSlice";
import { checkValidData } from "../utlis/validate";
import { LOGO_URL } from "../utlis/constants";
import { items } from "../utlis/backgroundItems";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      { /* Sign Up Logic */ }
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      { /* Sign In Logic */ }
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      {/* Grid background */}
      <div className="absolute inset-0">
        <GridMotion items={items} gradientColor="black" />
      </div>

      {/* Form Card */}
      <form
        className="w-11/12 sm:w-10/12 md:w-3/12 absolute p-8 sm:p-10 my-28 mx-auto right-0 left-0 text-white rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl z-50"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-6">
          <img
            src={LOGO_URL}
            alt="FoodieHub Logo"
            className="w-12 rounded-full"
          />
          <h1 className="text-xl font-bold text-white">FoodieHub</h1>
        </div>

        {/* Title */}
        <h2 className="font-extrabold text-3xl text-white drop-shadow-lg mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {/* Name input */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mb-4 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ref={name}
          />
        )}

        {/* Email */}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ref={email}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="p-4 mb-4 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ref={password}
        />

        {/* Error */}
        <p className="text-red-500 font-semibold text-sm mb-3">
          {errorMessage}
        </p>

        {/* Submit button */}
        <button
          className="p-4 mb-6 w-full rounded-lg bg-black hover:bg-gray-900 transition-all text-white font-semibold text-lg shadow-md shadow-purple-800"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle form */}
        <p
          className="text-center text-white/70 text-sm cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to <span className="font-semibold text-white">FoodieHub</span>
              ? <span className="text-white">Sign Up Now.</span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span className="text-white">Sign In Now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
