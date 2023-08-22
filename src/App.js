// import React from "react";
// import TopBar from "./components/TopBar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
// import Product from "./pages/Product";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";


// function App() {
//   return (
//     <div className="">
//       <TopBar style={{ display: "block" }}  />
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Product />} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<SignUp/>} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 2000); 
  }, []);

  if (!appLoaded) {
    
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Routes>
       
        {!isLoggedIn && <Route path="/" element={<Login handleLogin={handleLogin} />} />}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
      
        {isLoggedIn && (
          <>
            <TopBar style={{ display: "block" }} />
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Route path="/home" element={<Product />} />
          </>
        )}
      </Routes>
      {appLoaded && <Footer />}
    </div>
  );
}

export default App;